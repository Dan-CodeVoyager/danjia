import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CmdbComponent } from './cmdb/cmdb.component';
import { AudioComponent } from './audio/audio.component';
import { HomeimagesComponent } from './homeimages/homeimages.component';



export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Dan Jia',
    },
   
    {
        path: 'cmdb',
        title: 'Contact Dan',
        component: CmdbComponent,
    },
    {
        path: 'homeimages',
        title: 'My City',
        component: HomeimagesComponent,
    },
    {
        path: 'audio',
        title: 'My Music',
        component: AudioComponent,
    },
    
];
