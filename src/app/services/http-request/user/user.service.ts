import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'https://rhamiga.herokuapp.com/user';
  constructor(private http: HttpClient) { 

  }
  
  authUser(user: any){
    return this.http.post(this.URL+'/auth', user)
  }
}
