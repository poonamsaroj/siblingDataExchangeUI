import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getUserDetails() {
    return this.http.get('http://localhost:3000/getUsers');
  }
  
  setUserDetails(data) {
    return this.http.post('http://localhost:3000/setUsers', data, {responseType: 'text'});
  }

  
}
