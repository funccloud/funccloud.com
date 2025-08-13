import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}
  sendEmail(
    to: string,
    subject: string,
    template: string,
    content: Record<string, unknown>
  ): Promise<any> {
    const htmlContent = Object.entries(content)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join('');

    const body = JSON.stringify({
      from: 'FuncCloud <noreply@funccloud.com>',
      to: to,
      subject: subject,
      html: htmlContent,
    });
    return lastValueFrom(
      this.http.post('/.netlify/functions/sendgrid-sender', body)
    );
  }
}
