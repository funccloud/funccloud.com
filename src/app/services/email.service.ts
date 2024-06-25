import { Injectable } from '@angular/core';
import { sendEmail } from "@netlify/emails";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmail(to: string, subject: string, content: Record<string, unknown>): Promise<any> {
    return sendEmail({
      from: "noreply@funccloud.com",
      to: to,
      subject: subject,
      template: "subscribe",
      parameters: content,
    });
  }
}
