import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  uploadFile(formData:FormData){
    return this.http.post(environment.baseUrl + "image/upload",formData);
  }

}
