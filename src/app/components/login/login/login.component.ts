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
    //this.getLuhn();
    //this.createLuhn();
    //this.updateLuhn();
    //this.deleteLuhn();
  }

  getLuhn(){
    console.log('method');
    this.luhn$ = this.loginService.getLuhn('62636efbc54600547c434dbd').subscribe(entry =>{
      console.log('luhn desde el front',entry);
      this.luhn = entry.luhn.number;
      console.log('this.luhn', this.luhn);
    });
  }

  createLuhn(){
    this.luhn$ = this.loginService.createLuhn(79927398135).subscribe(create =>{
      console.log('luhn creado desde el front',create);
    });
  }

  updateLuhn(){
    this.luhn$ = this.loginService.updateLuhn('62705627587525670e40655f',79927398713).subscribe(update =>{
      console.log('luhn actualizado desde el front',update);
    });
  }

  deleteLuhn(){
    this.luhn$ = this.loginService.deleteLuhn('62705627587525670e40655f').subscribe(deletel =>{
      console.log('luhn eliminado desde el front',deletel);
    });
  }



  

 

  

  ngOnDestroy(): void {
    this.luhn$.unsubscribe();
  }

}
