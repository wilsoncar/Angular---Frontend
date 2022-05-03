import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  profileForm = this.fb.group({
    username: [''],
    password: ['']
  });


  login: string;
  login$: Subscription;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  onSubmit(){
    console.log('method');
    this.login$ = this.loginService.getLogin(this.profileForm.value).subscribe(entry =>{
      window.alert('Inicio de Sesión con éxito, Bienvenido!');
      

    });
    console.log(this.profileForm.value);
  }
  
  ngOnInit(): void {
    this.onSubmit();
  }
  ngOnDestroy(): void {
    this.login$.unsubscribe();
  }

}
