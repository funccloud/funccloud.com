import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-backup',
  imports: [BaseComponent, RouterLink],
  templateUrl: './politica-privacidade.component.html',
  styleUrl: './politica-privacidade.component.scss',
})
export class PoliticaPrivacidadeComponent {}
