import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from './model/LoginResultModel';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }



page(email: string): Observable<LoginResultModel> {
  return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
    email: email
  });
}
}
