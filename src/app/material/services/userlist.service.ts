import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  dataUrl = "https://reqres.in/api/users?page=2";

  constructor(private http:HttpClient) {} 
  getUserList(){
  return this.http.get(this.dataUrl);
  }
}
