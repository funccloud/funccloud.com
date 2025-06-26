import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sap',
  imports: [BaseComponent, RouterLink],
  templateUrl: './sap.component.html',
  styleUrl: './sap.component.scss',
})
export class SapComponent {}
