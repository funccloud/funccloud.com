import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true, // Adicionado standalone
  imports: [RouterLink], // Adicionado RouterLink se houver links para home, etc.
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFoundComponent { // Nome da classe alterado para NotFoundComponent

}
