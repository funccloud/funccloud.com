import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent } from '../../components/slider/slider.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [BaseComponent, SliderComponent, TestimonialsComponent, RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
