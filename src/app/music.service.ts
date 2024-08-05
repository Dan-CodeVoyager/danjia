import { Injectable } from '@angular/core';
import { Music } from './music';

@Injectable({
  providedIn: 'root'
})

export class MusicService {
  protected musicList: Music [] = [
    {
      name: 'Dear Traveller',
      address: '/assets/music/Dear_Traveller.m4a',
      photo: '/assets/musicpicture/Spirited_Away.jpg',
    },
    {
      name: 'Meditation',
      address: '/assets/music/Meditation.m4a',
      photo: '/assets/musicpicture/Meditation.jpg',
    },
  ];

  constructor() {}

  getAllMusics(): Music[] {
    return this.musicList;
  }
  
}
