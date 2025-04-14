import { AfterViewInit, Component } from '@angular/core';
import { tinySlider } from '../../utils/slider';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-slider',
    imports: [RouterLink],
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    tinySlider('home-slider');
  }

}
