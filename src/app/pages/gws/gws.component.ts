import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-gws',
  standalone: true,
  imports: [BaseComponent, RouterLink],
  templateUrl: './gws.component.html',
  styleUrl: './gws.component.scss'
})
export class GwsComponent {


}
