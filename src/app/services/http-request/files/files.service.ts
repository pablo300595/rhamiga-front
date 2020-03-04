import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  // URL = '/files';
  // URL = 'http://localhost:3000/files';
  URL = 'https://rhamiga.herokuapp.com/files';
  fileData: File = null;
  constructor(private http: HttpClient) { }

  
  public uploadFile(file, fileName){
    const formData = new FormData();
    formData.append('file', file, fileName);
    return this.http.post(this.URL, formData, {
      reportProgress: true,
      observe: 'events',
      params: {username: localStorage.getItem('step1FormUsername')}
    });
  }

  test(){
    return this.http.get(this.URL)
  }
}
