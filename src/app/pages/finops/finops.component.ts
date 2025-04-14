import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-finops',
    imports: [BaseComponent, RouterLink],
    templateUrl: './finops.component.html',
    styleUrl: './finops.component.scss'
})
export class FinopsComponent {

}
