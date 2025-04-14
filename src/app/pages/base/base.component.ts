import { Component, input } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
    selector: 'app-base',
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './base.component.html',
    styleUrl: './base.component.scss'
})
export class BaseComponent {
  floatingHeader = input(false);
  solucoes = input(false);
  institucional = input(false);
}
