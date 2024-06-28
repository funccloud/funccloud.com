import { Component, input } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  email?: string;
  label = input('');
  constructor(private emailService: EmailService) { }

  submitNewsletter() {
    if (!this.email) {
      alert('Por favor, preencha o campo de e-mail para assinar newsletter.');
      return;
    }
    const to = 'contato@funccloud.com';
    const subject = 'Formulário de Inscrição na Newsletter';
    const content = { email: this.email };
    this.emailService.sendEmail(to, subject, 'subscribe', content).then(() => {
      alert('Inscrição realizada com sucesso!');
    }).catch((e) => {
      console.error(e);
      alert('Erro ao realizar inscrição. Tente novamente mais tarde.');
    });
  }
}
