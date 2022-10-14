import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

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
    password: [ '12345', [Validators.required, Validators.minLength(5)] ]
  });

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService ) { }

  registrar() {
    console.log(this.miRegistro.value);
    const { name, email, password } = this.miRegistro.value;

    this.authService.registro(name, email, password).subscribe( valid => {
      if (valid === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire('Error', valid, 'error')
      }
    });
  }

}
