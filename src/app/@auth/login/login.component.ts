import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { User } from '../auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: User;

  constructor(
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    this.form.setValue({
      email: 'test@test.com',
      password: '123456'
    });
  }

  ngOnInit() {
  }

  formSubmitted() {
    console.log(this.form.value);

    if (this.form.invalid) {
      return;
    }
    return this.router.navigateByUrl('/admin');
  }
}
