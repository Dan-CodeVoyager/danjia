import { Component, inject } from '@angular/core';
import { MusicComponent } from "../music/music.component";
import { Music } from '../music';
import { MusicService } from '../music.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [MusicComponent, FormsModule, CommonModule],
  template: `
    <main class="music-listing">

      <h1>I hope you guys can enjoy it!</h1>

      <section>
        <form>
          <input id="au" type="text" placeholder="Filter by music name" #filter />
          <button class="primary" type="buttion" (click)="filterResults(filter.value)">Search</button >
        </form>
      </section>

      <section class="results">
       <app-music *ngFor="let music of filteredMusicList" [music]="music"></app-music>
      </section>    

</main>
  `,
  styleUrl: './audio.component.css'
})

export class AudioComponent {
  
  filter = '';

  musicList: Music[] = [];

  filteredMusicList: Music[] = [];

  musicService: MusicService = inject(MusicService);

  constructor(){
    this.musicList = this.musicService.getAllMusics();
    this.filteredMusicList = this.musicService.getAllMusics();
  }

  filterResults(text: string){
    if (!text) this.filteredMusicList = this.musicList;  // if no input, give the wohle list results

    this.filteredMusicList = this.musicList.filter(
      music => music?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
 
}
