import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, Post } from '../blog.service'; // Corrigido o nome do serviço
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true, // Adicionado standalone
  imports: [CommonModule, RouterLink], // CommonModule para ngFor, ngIf, etc. RouterLink para navegação
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent implements OnInit { // Nome do componente alterado para BlogComponent
  posts$: Observable<Post[]>;

  constructor(private blogService: BlogService) {
    this.posts$ = this.blogService.getPosts();
  }

  ngOnInit(): void {
    // A subscrição é tratada no template com o pipe async
  }
}
