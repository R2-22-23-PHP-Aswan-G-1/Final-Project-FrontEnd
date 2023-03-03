import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

error:string=""

registerForm:FormGroup=new FormGroup({
name:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
  
email:new FormControl(null,[Validators.required,Validators.email]),

password:new FormControl(null,[Validators.required]),
})

constructor(private authService:AuthService , private router:Router){}
ngOnInit(): void {

}

submitRegisterForm(registerForm:FormGroup){
   console.log(registerForm)

if(registerForm.valid){
  // this.router.navigate(['/login'])
  this.authService.register(this.registerForm.value).subscribe((response)=>{
console.log(response)
//     if(response.message=="success"){
// //go to login

// this.router.navigate(['/login'])
//     }else{
// this.error=response.errors.email.message
  //  }

 }
 )

}
}









}
