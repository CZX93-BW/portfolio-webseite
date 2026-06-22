import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ContactFormMessage,
  ContactFormResponse,
} from '../models/contact-form.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly httpClient = inject(HttpClient);
  private readonly contactEndpoint = '/contact.php';

  sendMessage(message: ContactFormMessage): Observable<ContactFormResponse> {
    return this.httpClient.post<ContactFormResponse>(
      this.contactEndpoint,
      message,
    );
  }
}