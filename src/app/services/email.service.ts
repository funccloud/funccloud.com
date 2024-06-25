import { Injectable } from '@angular/core';
import * as sgMail from '@sendgrid/mail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    sgMail.setApiKey(environment.sendgridApiKey);
  }

  sendEmail(to: string, subject: string, content: string): Promise<any> {
    const msg = {
      to,
      from: 'noreply@funccloud.com',
      subject,
      html: content
    };

    return sgMail.send(msg);
  }
}
