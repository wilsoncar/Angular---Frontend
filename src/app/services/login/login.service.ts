import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpClient:HttpClient) { }

  getLuhn(luhn: any): Observable<any> {
    console.log('n:',luhn);
    return this.httpClient.get<any>(environment.END_POINTS.LUHN, {params:{luhn}});
  }

  createLuhn(number: any): Observable<any> {
    console.log('number:',number);
    return this.httpClient.put<any>(environment.END_POINTS.LUHN, {number});
  }

  updateLuhn(id: string, data: any): Observable<any> {
    console.log('id:',id,'data:', data);
    return this.httpClient.post<any>(environment.END_POINTS.LUHN, {id,data});
  }

  deleteLuhn(id: string): Observable<any> {
    console.log('id:',id);
    return this.httpClient.delete<any>(environment.END_POINTS.LUHN, {body:{id}});
  }

}


