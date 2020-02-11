import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  URL = 'https://rhamiga.herokuapp.com/session';
  constructor(private http: HttpClient) { }

  insertSession(session: any){
    return this.http.post(this.URL, session);
  }

  getSession(_id){
    return this.http.get(this.URL,{params: _id});
  }
}
