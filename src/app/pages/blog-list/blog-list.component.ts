import { Component, OnInit, inject } from '@angular/core';
import { BlogService, PostMetadata } from '../../services/blog.service';
import { Observable } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common'; // Importar CommonModule e DatePipe
import { RouterLink } from '@angular/router';
import { BaseComponent } from "../base/base.component"; // Importar RouterLink

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    CommonModule, // Necessário para *ngFor, async pipe, etc.
    RouterLink, // Necessário para [routerLink]
    DatePipe, // Para formatar a data
    BaseComponent
],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  private blogService = inject(BlogService);
  posts$!: Observable<PostMetadata[]>; // Usaremos o async pipe

  ngOnInit(): void {
    this.posts$ = this.blogService.getPostsMetadata();
  }
}
