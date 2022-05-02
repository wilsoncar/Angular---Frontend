import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  luhn: string;
  luhn$: Subscription;

  constructor(private loginService: LoginService) {
    console.log('mensaje renderizado desde el contructor');
    this.luhn = '';
  }

  ngOnInit(): void {
    console.log('init');
    this.getLuhn();
  }

  getLuhn(){
    console.log('method');
    this.luhn$ = this.loginService.getLuhn('62636efbc54600547c434dbd').subscribe(entry =>{
      console.log('luhn desde el front',entry);
      this.luhn = entry.luhn.number;
      console.log('this.luhn', this.luhn);
    });
  }

  ngOnDestroy(): void {
    this.luhn$.unsubscribe();
  }

}
