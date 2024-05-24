import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [BaseComponent, SliderComponent, TestimonialsComponent, RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
