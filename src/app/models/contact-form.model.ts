/**
 * Payload sent from the Angular contact form to the PHP endpoint.
 */
export interface ContactFormMessage {
  /**
   * Sender name entered in the contact form.
   */
  name: string;

  /**
   * Sender email address used as reply target.
   */
  email: string;

  /**
   * Message body submitted by the user.
   */
  message: string;
}

/**
 * Response shape returned by the PHP contact endpoint.
 */
export interface ContactFormResponse {
  /**
   * Indicates whether the message was accepted and processed successfully.
   */
  success: boolean;

  /**
   * Optional server-side error message for failed submissions.
   */
  error?: string;
}
