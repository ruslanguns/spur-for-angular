import { Component, OnInit } from '@angular/core';
import { User } from '../auth.interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styles: []
})
export class ForgotComponent implements OnInit {

  user: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  formSubmitted(form: NgForm) {
    if (form.invalid) {
      return;
    }
    return this.router.navigateByUrl('/reset/token_goes_here');
  }

}
