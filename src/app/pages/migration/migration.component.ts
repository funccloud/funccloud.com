import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-migration',
    imports: [BaseComponent, RouterLink],
    templateUrl: './migration.component.html',
    styleUrl: './migration.component.scss'
})
export class MigrationComponent {

}
