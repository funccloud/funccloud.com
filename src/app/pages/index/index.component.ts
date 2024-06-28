import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent } from '../../components/slider/slider.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BaseComponent } from '../base/base.component';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [BaseComponent, SliderComponent, TestimonialsComponent, RouterLink, NewsletterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
