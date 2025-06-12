import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogCard } from './blog-card/blog-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogCard, CommonModule],
  template: `
    <div class="app-container">
  <h1 class="text-center">Our Awesome Blog</h1>

  <div class="blog-card-grid">
    <app-blog-card
      imageUrl="https://picsum.photos/id/10/2500/1667"
      title="Exploring the Wilderness"
      description="Join us on an adventure through the untamed wilderness. Discover breathtaking landscapes and hidden gems."
      author="Alice Smith"
      [date]="wildernessDate"
      link="/blog/wilderness"
    ></app-blog-card>

    <app-blog-card
      imageUrl="https://picsum.photos/id/43/1280/831"
      title="Urban Photography Tips"
      description="Master the art of capturing the vibrant energy of cityscapes with these expert photography tips."
      author="Bob Johnson"
      [date]="urbanPhotographyDate"
      link="/blog/urban-photography"
    ></app-blog-card>

    <app-blog-card
      imageUrl="https://picsum.photos/id/292/3852/2556"
      title="Delicious Vegan Recipes"
      description="Explore a collection of easy-to-make and incredibly tasty vegan recipes for every meal."
      author="Charlie Brown"
      [date]="veganRecipeDate"
      link="/blog/vegan-recipes"
    ></app-blog-card>
  </div>
</div>

<router-outlet />
  `,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'UseAngularScssLikePro';
  protected veganRecipeDate = new Date('2024-06-15');
  protected urbanPhotographyDate = new Date('2024-06-01');
  protected wildernessDate = new Date('2024-05-10');
}
