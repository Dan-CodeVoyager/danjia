import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CmdbComponent } from './cmdb/cmdb.component';
import { AudioComponent } from './audio/audio.component';
import { HomeimagesComponent } from './homeimages/homeimages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, CmdbComponent, AudioComponent, HomeimagesComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = '';
  navList = [
    {navItem: 'CV', link: '/assets/CV-de.pdf'},
    {navItem: 'Linkedin', link: 'https://www.linkedin.com/in/dan-jia-527141295/'},
    {navItem: 'My Codes', link: 'https://github.com/Dan-CodeVoyager'},
    {navItem: 'My Music', link: 'music'},
    {navItem: 'My Life & Learn German', link: 'https://www.xiaohongshu.com/user/profile/5bde274a00eebd0001d2a8a0'},
  ];
  
}