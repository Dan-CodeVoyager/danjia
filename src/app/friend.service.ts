import { Injectable } from '@angular/core';
import { FriendDB } from './friend-db';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor() { }

  protected friendList: FriendDB [] = [];

  submitApplication(firstName: string, lastName: string, email: string){
    this.friendList.push({firstName: firstName, lastName: lastName, email: email});
    console.log(firstName, lastName, email);
    console.log(this.friendList);
    alert('Hello ' + firstName + '!');
  }

}
