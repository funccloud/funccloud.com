import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent } from '../../components/slider/slider.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BaseComponent } from '../base/base.component';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [BaseComponent, SliderComponent, TestimonialsComponent, RouterLink, FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  email?: string;
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
