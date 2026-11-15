import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { translations } from '../../data/translations';
import { ContactFormResponse } from '../../models/contact-form.model';
import { ContactService } from '../../services/contact.service';
import { LanguageService } from '../../services/language';

/**
 * Contact section component.
 *
 * Manages the reactive contact form, client-side validation state and the
 * request lifecycle for sending messages to the PHP backend endpoint.
 */
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly languageService = inject(LanguageService);

  /**
   * Contact-section translation block for the active language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].contact;
  });

  /**
   * Tracks whether a form submission is currently in progress.
   */
  protected isSending = false;

  /**
   * Indicates that the user has attempted to submit the form at least once.
   */
  protected wasSubmitted = false;

  /**
   * Controls display of the success feedback message.
   */
  protected sendSuccess = false;

  /**
   * Controls display of the error feedback message.
   */
  protected sendError = false;

  /** A text field has a new value waiting for blur validation. */
  protected hasPendingEdit = false;

  /**
   * Reactive form model for the contact section.
   */
  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    website: ['', { updateOn: 'change' }],
    privacyAccepted: [false, { validators: Validators.requiredTrue, updateOn: 'change' }],
  }, { updateOn: 'blur' });

  /** Keeps keyboard submission from using a previously validated value. */
  protected get submitDisabled(): boolean {
    return this.hasPendingEdit || this.contactForm.invalid || this.isSending;
  }

  /** Autofill can populate an unfocused field without ever firing a blur on it. */
  protected handleTextInput(event: Event): void {
    const field = event.target;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
    const name = field.name;
    if (name !== 'name' && name !== 'email' && name !== 'message') return;

    if (field === field.ownerDocument.activeElement) {
      this.hasPendingEdit = true;
    } else {
      this.contactForm.controls[name].setValue(field.value);
    }
  }

  /**
   * Validates the form and starts the submit request when all fields are valid.
   */
  protected submitContactForm(): void {
    this.wasSubmitted = true;

    if (this.submitDisabled) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sendContactMessage();
  }

  /**
   * Determines whether a validation error should be visible for a control.
   *
   * @param controlName - Name of the form control to inspect.
   * @returns `true` when the control is invalid and should show feedback.
   */
  protected shouldShowError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.wasSubmitted);
  }

  /**
   * Sends the form payload through the contact service.
   */
  private sendContactMessage(): void {
    this.setSendingState();

    const { name, email, message, website } = this.contactForm.getRawValue();

    this.contactService.sendMessage({ name, email, message, website }).subscribe({
      next: (response) => this.handleContactResponse(response),
      error: () => this.handleSendError(),
    });
  }

  /**
   * Resets request feedback before a new submit request starts.
   */
  private setSendingState(): void {
    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = false;
  }

  /**
   * Routes the server response into success or error UI state.
   *
   * @param response - Typed PHP endpoint response.
   */
  private handleContactResponse(response: ContactFormResponse): void {
    if (response.success) {
      this.handleSendSuccess();
      return;
    }

    this.handleSendError();
  }

  /**
   * Handles a successful send operation and clears the form.
   */
  private handleSendSuccess(): void {
    this.isSending = false;
    this.sendSuccess = true;
    this.wasSubmitted = false;
    this.resetContactForm();
  }

  /**
   * Handles failed send operations.
   */
  private handleSendError(): void {
    this.isSending = false;
    this.sendError = true;
  }

  /**
   * Restores the contact form to its initial empty state.
   */
  private resetContactForm(): void {
    this.contactForm.reset({
      name: '',
      email: '',
      message: '',
      website: '',
      privacyAccepted: false,
    });
  }
}
