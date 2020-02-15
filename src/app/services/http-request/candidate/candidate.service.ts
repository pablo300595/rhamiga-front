import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  URL = 'https://rhamiga.herokuapp.com/candidate';
  constructor(private http: HttpClient) { }

  createCandidate(candidate){
    return this.http.post(this.URL, candidate);
  }

  findCandidateId(candidate){
    return this.http.post(`${this.URL}/find-id`, candidate);
  }
}
