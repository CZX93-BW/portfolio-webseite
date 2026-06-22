import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { translations } from '../../data/translations';
import { ContactFormResponse } from '../../models/contact-form.model';
import { ContactService } from '../../services/contact.service';
import { LanguageService } from '../../services/language';

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

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].contact;
  });

  protected isSending = false;
  protected wasSubmitted = false;
  protected sendSuccess = false;
  protected sendError = false;

  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacyAccepted: [false, [Validators.requiredTrue]],
  });

  protected submitContactForm(): void {
    this.wasSubmitted = true;

    if (this.contactForm.invalid || this.isSending) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sendContactMessage();
  }

  protected shouldShowError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.wasSubmitted);
  }

  private sendContactMessage(): void {
    this.setSendingState();

    const { name, email, message } = this.contactForm.getRawValue();

    this.contactService.sendMessage({ name, email, message }).subscribe({
      next: (response) => this.handleContactResponse(response),
      error: () => this.handleSendError(),
    });
  }

  private setSendingState(): void {
    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = false;
  }

  private handleContactResponse(response: ContactFormResponse): void {
    if (response.success) {
      this.handleSendSuccess();
      return;
    }

    this.handleSendError();
  }

  private handleSendSuccess(): void {
    this.isSending = false;
    this.sendSuccess = true;
    this.wasSubmitted = false;
    this.resetContactForm();
  }

  private handleSendError(): void {
    this.isSending = false;
    this.sendError = true;
  }

  private resetContactForm(): void {
    this.contactForm.reset({
      name: '',
      email: '',
      message: '',
      privacyAccepted: false,
    });
  }
}