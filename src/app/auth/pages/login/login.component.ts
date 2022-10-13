import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  miFormulario: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['12345', [Validators.required, Validators.minLength(5)]],
  });

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService ) { }

  login() {
    console.log(this.miFormulario.value);
    const {email, password} = this.miFormulario.value;
    this.authService.login(email, password).subscribe( valid => {
      console.log(valid);
      if (valid === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire('Error', valid, 'error')
      }
    });
  }

 

}
