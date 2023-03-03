<<<<<<< HEAD
import {HttpClient } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> e3a073f5e8c40947533eda47d87e47de42b437d1
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class InformationsService {
sub:any;
  constructor(_HttpClient:HttpClient) {

<<<<<<< HEAD
_HttpClient
   }
=======
  constructor(private httpClient:HttpClient) { }




getInstructorInfo(id:number):Observable<any>{
  return  this.httpClient.get(`http://127.0.0.1:8000/api//instructor/${id}`)
}





>>>>>>> e3a073f5e8c40947533eda47d87e47de42b437d1
}
