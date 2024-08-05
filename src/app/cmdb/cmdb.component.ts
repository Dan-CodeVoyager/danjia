import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FriendService } from '../friend.service';
import { FriendDB } from '../friend-db';


@Component({
  selector: 'app-cmdb',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cmdb.component.html',
  styleUrl: './cmdb.component.css'
})


export class CmdbComponent {

  constructor(){}

  route: ActivatedRoute = inject(ActivatedRoute);

  friendService = inject(FriendService);
  friend: FriendDB | undefined;

  subForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  submitApplication(){
    this.friendService.submitApplication(
      this.subForm.value.firstName ?? '',
      this.subForm.value.lastName ?? '',
      this.subForm.value.email ?? '',
    );
   }

}
