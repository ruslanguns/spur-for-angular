import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../auth.interface';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styles: []
})
export class ResetComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router
  ) {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password2: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  resetPassword() {
    const pass1 = this.form.value.password;
    const pass2 = this.form.value.password2;

    if (pass1 !== pass2) {
      console.log('Passwords do not match.');
      return;
    }
    console.log('Password changed!');
    return this.router.navigateByUrl('/dashboard');
  }
}
