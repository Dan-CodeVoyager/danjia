import { Component } from '@angular/core';

@Component({
  selector: 'app-homeimages',
  standalone: true,
  imports: [],
  templateUrl: './homeimages.component.html',
  styleUrl: './homeimages.component.css'
})

export class HomeimagesComponent {
  home_src1 = '/assets/home1.jpg';
  home_src2 = '/assets/home2.jpg';
  home_src3 = '/assets/home3.jpg';
  home_src4 = '/assets/home4.jpg';  
}
