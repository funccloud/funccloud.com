import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-posture-review',
    imports: [BaseComponent, RouterLink],
    templateUrl: './posture-review.component.html',
    styleUrl: './posture-review.component.scss'
})
export class PostureReviewComponent {

}
