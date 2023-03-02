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
  error :string=''
loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required]),

})

constructor(private router:Router ,private authService:AuthService ,private deviceService: DeviceDetectorService){}




submitRegisterForm(loginForm:FormGroup){
  // console.log(loginForm)

  if(loginForm.valid){
  this.router.navigate(['/home'])
  this.authService.login(this.loginForm.value).subscribe((response)=>{


    // console.log(response);
    if(response.message=="success"){
      // this.authService.checkLogin.next(true);
console.log(response.message)
     localStorage.setItem('userToken',response.token);
     this.authService.token();
     this.router.navigate(['/home'])
    }else{

this.error=response.errors.email.message
    }

 }
 )

 }
}

}
