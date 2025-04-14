import { AfterViewInit, Component } from '@angular/core';
import { tinySlider } from '../../utils/slider';

@Component({
    selector: 'app-testimonials',
    imports: [],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    tinySlider('testimonials-slider');
  }

}
