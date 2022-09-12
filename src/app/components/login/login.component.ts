import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userInfo = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(32)])
    });
  }

  login() {
    if (this.userInfo.valid) {
      console.log(this.userInfo.value);
    }
  }

}
