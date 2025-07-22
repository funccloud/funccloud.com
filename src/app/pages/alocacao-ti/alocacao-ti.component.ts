import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-backup',
  imports: [BaseComponent, RouterLink],
  templateUrl: './alocacao-ti.component.html',
  styleUrl: './alocacao-ti.component.scss',
})
export class AlocacaoTiComponent {}
