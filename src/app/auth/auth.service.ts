import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
checkLogin=new BehaviorSubject<boolean>(false)
userToken=new BehaviorSubject<any>(null);
id =new BehaviorSubject<number>(0);

  constructor(private  httpClient: HttpClient , private router:Router) {
if(localStorage.getItem('userToken')!=null){
  this.token();
}


   }


token(){
  this.userToken.next(localStorage.getItem('userToken'))
}
logout(){
  localStorage.removeItem('userToken');
this.userToken.next(null);
this.router.navigate(['/login'])
}

register(formData:object ):Observable<any>{
 return  this.httpClient.post(`http://127.0.0.1:8000/api/register`,formData)
}



login(formData:object ):Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/login`,formData)
 }

}
