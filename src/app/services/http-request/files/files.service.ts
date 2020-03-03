import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  // URL = '/files';
  URL = 'http://localhost:3000/files';
  // URL = 'https://rhamiga.herokuapp.com/files';
  fileData: File = null;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  
  public uploadFile(file, fileName){
    const formData = new FormData();
    formData.set('file', file, fileName);
    return this.http.post<any>(this.URL, formData);
  }

  test(){
    return this.http.get(this.URL)
  }
}
