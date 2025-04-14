import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-devops',
    imports: [BaseComponent, RouterLink],
    templateUrl: './devops.component.html',
    styleUrl: './devops.component.scss'
})
export class DevopsComponent {

}
