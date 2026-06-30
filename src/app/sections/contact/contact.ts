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

  /**
   * Reactive form model for the contact section.
   */
  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacyAccepted: [false, [Validators.requiredTrue]],
  });

  /**
   * Validates the form and starts the submit request when all fields are valid.
   */
  protected submitContactForm(): void {
    this.wasSubmitted = true;

    if (this.contactForm.invalid || this.isSending) {
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

    const { name, email, message } = this.contactForm.getRawValue();

    this.contactService.sendMessage({ name, email, message }).subscribe({
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
      privacyAccepted: false,
    });
  }
}
