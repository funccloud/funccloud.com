import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true, // Adicionado standalone
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent { // Nome da classe alterado para ServicesComponent

}
