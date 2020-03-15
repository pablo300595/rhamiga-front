import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  URL = 'https://rhamiga.herokuapp.com/candidate';
  // URL = 'http://localhost:3000/candidate';
  constructor(private http: HttpClient) { }

  createCandidate(candidate){
    return this.http.post(this.URL, candidate);
  }

  findCandidateId(candidate){
    return this.http.post(`${this.URL}/find-id`, candidate);
  }

  updateCandidate(id, candidate){
    return this.http.put(`${this.URL}/${id}`, candidate);
  }
}
