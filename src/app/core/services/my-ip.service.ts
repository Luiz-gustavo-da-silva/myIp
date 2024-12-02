import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyIp } from '../models/myIp-interface';

@Injectable({
  providedIn: 'root'
})
export class MyIpService {
  readonly urlApi = "/api";

  constructor(private http: HttpClient) {}

  getIp(): Observable<MyIp>{
    return this.http.get<MyIp>(this.urlApi);
  }
}
