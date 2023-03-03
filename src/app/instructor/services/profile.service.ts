import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  api_key = "24|eaC0r6PuMJa23rjWW90XhqOrAHqIhEKjZtG4j6Q8";
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.api_key}`
  });
  requestOptions= { headers:this.headers };
  constructor(public _HttpClient: HttpClient) {}
  getProfile(): Observable<any> {
  return this._HttpClient.get('http://127.0.0.1:8000/api/user/profile',this.requestOptions)
}
}
