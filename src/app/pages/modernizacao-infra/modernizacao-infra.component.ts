import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modernizacao-infra',
  standalone: true,
  imports: [BaseComponent, RouterLink],
  templateUrl: './modernizacao-infra.component.html',
  styleUrl: './modernizacao-infra.component.scss'
})
export class ModernizacaoInfraComponent {

}
