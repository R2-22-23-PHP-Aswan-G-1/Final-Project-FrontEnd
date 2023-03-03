import { Component } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: string = ''
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),

  })

  constructor(private router: Router, private authService: AuthService, private deviceService: DeviceDetectorService) { }
  submitRegisterForm(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.router.navigate(['/home'])
      this.authService.login(this.loginForm.value).subscribe((response) => {
        if (response.data != null) {
          // this.authService.checkLogin.next(true);
          localStorage.setItem('userToken', response.data.token);
          this.authService.token();
          this.router.navigate(['/profile'])
        } else {
          this.error = response.errors.email.message
        }
      }
      )
    }
  }

}
