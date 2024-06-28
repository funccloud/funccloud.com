import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-analytics',
  standalone: true,
  imports: [BaseComponent, RouterLink],
  templateUrl: './data-analytics.component.html',
  styleUrl: './data-analytics.component.scss'
})
export class DataAnalyticsComponent {

}
