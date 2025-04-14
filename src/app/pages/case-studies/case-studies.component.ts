import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-case-studies',
    imports: [BaseComponent, RouterLink],
    templateUrl: './case-studies.component.html',
    styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {

}
