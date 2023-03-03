import { Component } from '@angular/core';
// import { DeviceDetectorService } from 'ngx-device-detector';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RoleService } from 'src/app/services/role.service';

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

<<<<<<< HEAD
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
=======
constructor(private router:Router ,private authService:AuthService ,private roleService:RoleService){}


submitRegisterForm(loginForm:FormGroup){
  if(loginForm.valid){
  this.authService.login(this.loginForm.value).subscribe((response)=>{
    console.log(response.data);
    if(response.data != null){
      this.roleService.getInfo(response.data.role,response.data);
      console.log(this.roleService.instructor.getValue());
     localStorage.setItem('userToken',response.data.token);
     this.authService.token();
     this.router.navigate(['/home'])
    }else{

this.error=response.message

>>>>>>> e3a073f5e8c40947533eda47d87e47de42b437d1
    }
  }

}
