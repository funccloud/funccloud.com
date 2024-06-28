import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificacoes',
  standalone: true,
  imports: [BaseComponent, RouterLink],
  templateUrl: './certificacoes.component.html',
  styleUrl: './certificacoes.component.scss'
})
export class CertificacoesComponent {

}
