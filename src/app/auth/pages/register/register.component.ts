import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miRegistro: FormGroup = this.fb.group({
    name: [ 'Test4', [Validators.required] ],
    email: [ 'test4@test.com', [Validators.required, Validators.email] ],
    password: [ '123456', [Validators.required, Validators.minLength(6)] ]
  });

  constructor( private fb: FormBuilder, private router: Router ) { }

  registrar() {
    console.log(this.miRegistro.value);
    this.router.navigateByUrl('/dashboard');
  }

}
