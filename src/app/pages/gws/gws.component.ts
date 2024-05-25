import { AfterViewInit, Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { tinySlider } from '../../utils/slider';

@Component({
  selector: 'app-gws',
  standalone: true,
  imports: [BaseComponent],
  templateUrl: './gws.component.html',
  styleUrl: './gws.component.scss'
})
export class GwsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    tinySlider('gws-testimonials');
    tinySlider('gws-case-study');
  }

}
