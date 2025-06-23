import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header'; // Importando HeaderComponent
import { Footer } from './footer/footer'; // Importando FooterComponent
import { HttpClientModule } from '@angular/common/http'; // Importando HttpClientModule

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header, // Adicionando HeaderComponent aos imports
    Footer, // Adicionando FooterComponent aos imports
    HttpClientModule // Adicionando HttpClientModule para o BlogService funcionar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Funccloud'; // Título atualizado anteriormente em index.html, mas pode ser mantido aqui também
}
