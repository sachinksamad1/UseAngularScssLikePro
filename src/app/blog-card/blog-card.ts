import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-card">
  <div class="blog-card__image-container">
    <img [src]="imageUrl" alt="{{ title }}" class="blog-card__image">
  </div>
  <div class="blog-card__content">
    <h3 class="blog-card__title">{{ title }}</h3>
    <p class="blog-card__description">{{ description }}</p>
    <div class="blog-card__meta">
      <span class="blog-card__author">{{ author }}</span>
      <span class="blog-card__date">{{ date | date:'mediumDate' }}</span>
    </div>
    <a [href]="link" class="blog-card__button">Read More</a>
  </div>
</div>
  `,
  styleUrl: './blog-card.scss'
})
export class BlogCard {
  @Input() imageUrl: string = 'https://via.placeholder.com/400x200';
  @Input() title: string = 'Default Blog Title';
  @Input() description: string = 'This is a short description of the blog post. It provides a brief overview of the content.';
  @Input() author: string = 'John Doe';
  @Input() date: Date = new Date();
  @Input() link: string = '#';
}
