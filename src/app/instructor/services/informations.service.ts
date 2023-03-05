import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  constructor(private httpClient:HttpClient) { }




// getInstructorInfo(id:number):Observable<any>{
//   return  this.httpClient.get(`http://127.0.0.1:8000/api/instructor/${id}`)
// }










}
