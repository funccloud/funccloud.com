import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [BaseComponent, SliderComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
