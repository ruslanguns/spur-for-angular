import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user: User;
  password2: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  formSubmitted(form: NgForm) {
    console.log(form.value);

    if (form.invalid) {
      return;
    }
    return this.router.navigateByUrl('/admin');
  }
}
