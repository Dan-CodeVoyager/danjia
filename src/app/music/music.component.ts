import { Component, Input } from '@angular/core';
import { Music } from '../music';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  @Input() music!: Music;
}
