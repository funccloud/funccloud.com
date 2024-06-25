import { Injectable } from '@angular/core';
import { MailService } from "@sendgrid/mail";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmail(to: string, subject: string, content: string): Promise<any> {
    let sgMail = new MailService();
    sgMail.setApiKey(environment.sendgridApiKey);
    const msg = {
      to,
      from: 'noreply@funccloud.com',
      subject,
      html: content
    };
    return sgMail.send(msg);
  }
}
