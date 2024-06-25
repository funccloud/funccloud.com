import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }
  sendEmail(to: string, subject: string, template: string, content: Record<string, unknown>): Promise<any> {
    let body = JSON.stringify({
      from: "FuncCloud <noreply@funccloud.com>",
      to: to,
      subject: subject,
      parameters: content,
    });
    return lastValueFrom(this.http.post(`/.netlify/functions/emails/${template}`, body, {
      headers: {
        "netlify-emails-secret": environment.envVar.NETLIFY_EMAILS_SECRET
      }
    }));
  }
}
