import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cms',
    imports: [BaseComponent, RouterLink],
    templateUrl: './cms.component.html',
    styleUrl: './cms.component.scss'
})
export class CmsComponent {

}
