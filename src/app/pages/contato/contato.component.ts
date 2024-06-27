import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import exp from 'constants';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [BaseComponent, FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  readonly email = 'contato@funccloud.com';
  contatoForm: ContatoForm = { nome: '', email: '', telefone: '', mensagem: '' };
  constructor(private emailService: EmailService) { }

  submitContato() {
    const to = 'contato@funccloud.com';
    const subject = 'Formulário de Contato';
    const content = {
      nome: this.contatoForm.nome,
      email: this.contatoForm.email,
      telefone: this.contatoForm.telefone,
      mensagem: this.contatoForm.mensagem
    };
    this.emailService.sendEmail(to, subject, 'contato', content).then(() => {
      alert('Formulário enviado com sucesso!');
    }).catch((e) => {
      console.error(e);
      alert('Erro ao enviar formulário. Tente novamente mais tarde.');
    });
  }

}

export interface ContatoForm {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}
