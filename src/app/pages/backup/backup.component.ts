import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-backup',
  standalone: true,
  imports: [BaseComponent, RouterLink],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.scss'
})
export class BackupComponent {

}
