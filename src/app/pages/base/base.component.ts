import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  @Input() floatingHeader = false;
  @Input() solucoes = false;
  @Input() verticais = false;
}
