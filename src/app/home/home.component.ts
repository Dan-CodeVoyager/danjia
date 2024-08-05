import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  navList = [
    {navItem: 'CV', link: '/assets/CV-de.pdf'},
    {navItem: 'Linkedin', link: 'https://www.linkedin.com/in/dan-jia-527141295/'},
    {navItem: 'My Codes', link: 'https://github.com/Dan-CodeVoyager'},
    {navItem: 'My Music', link: 'audio'},
    {navItem: 'My Life & Learn German', link: 'https://www.xiaohongshu.com/user/profile/5bde274a00eebd0001d2a8a0'},
  ];

  home_img = "/assets/home_page.jpg";
}



