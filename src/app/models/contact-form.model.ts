export interface ContactFormMessage {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  error?: string;
}