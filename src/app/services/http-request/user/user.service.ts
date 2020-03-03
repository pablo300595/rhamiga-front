import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'https://rhamiga.herokuapp.com/user';
  // URL = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { 

  }
  
  authUser(user: any){
    return this.http.post(`${this.URL}/auth`, user)
  }

  getUserByUsername(username){
    return this.http.get(`${this.URL}/username/${username}`);
  }

  getUserDataById(id) {
    return this.http.get(`${this.URL}/${id}`);
  }

  createUser(user){
    return this.http.post(this.URL, user);
  }
}
