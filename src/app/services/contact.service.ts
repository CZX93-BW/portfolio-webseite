import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ContactFormMessage,
  ContactFormResponse,
} from '../models/contact-form.model';

/**
 * Handles communication with the PHP contact endpoint.
 *
 * The service keeps the component independent from the concrete API path and
 * returns the typed server response used for success and error handling.
 */
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly httpClient = inject(HttpClient);
  private readonly contactEndpoint = '/contact.php';

  /**
   * Sends a validated contact form message to the server.
   *
   * @param message - Contact form payload collected by the Angular form.
   * @returns Observable containing the PHP endpoint response.
   */
  sendMessage(message: ContactFormMessage): Observable<ContactFormResponse> {
    return this.httpClient.post<ContactFormResponse>(
      this.contactEndpoint,
      message,
    );
  }
}
