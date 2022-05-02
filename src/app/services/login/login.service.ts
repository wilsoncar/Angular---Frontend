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
    console.log('n',luhn);
    return this.httpClient.get<any>(environment.END_POINTS.GET_LUHN, {params:{luhn}});

  }
}
