import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactFormMessage } from '../models/contact-form.model';

interface ContactResponse {
  success: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly httpClient = inject(HttpClient);
  private readonly contactEndpoint = '/contact.php';

  sendMessage(message: ContactFormMessage): Observable<ContactResponse> {
    return this.httpClient.post<ContactResponse>(this.contactEndpoint, message);
  }
}