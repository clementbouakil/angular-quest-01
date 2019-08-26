import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = {
    email: ""
  };

  constructor() { }

  ngOnInit() {
  }
}
