import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
isLogin:any;
    constructor(private authService:AuthService, private router:Router){}


ngOnInit(): void {
// this.authService.checkLogin.subscribe((res)=> this.isLogin= res)

this.authService.userToken.subscribe(()=>{
  if(this.authService.userToken.getValue() != null){
    this.isLogin=true;
  }else{
    this.isLogin=false;
  }

})


}
logout(){
// this.authService.checkLogin.next(false);
this.authService.logout();
}
}
