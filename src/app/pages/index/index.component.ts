import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SliderComponent } from '../../components/slider/slider.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BaseComponent } from '../base/base.component';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { BlogService, PostMetadata } from '../../services/blog.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-index',
    imports: [BaseComponent, SliderComponent, TestimonialsComponent, RouterLink, NewsletterComponent, CommonModule],
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    private blogService = inject(BlogService);
    latestPosts$!: Observable<PostMetadata[]>;

    ngOnInit(): void {
        this.latestPosts$ = this.blogService.getRecentPosts();
    }
}
