import { AfterViewInit, Component } from '@angular/core';
import { tinySlider } from '../../utils/slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    tinySlider('home-slider');
  }

}
