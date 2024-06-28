import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suporte',
  standalone: true,
  imports: [BaseComponent, RouterLink],
  templateUrl: './suporte.component.html',
  styleUrl: './suporte.component.scss'
})
export class SuporteComponent {

}
