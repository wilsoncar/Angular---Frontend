import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {
  profileForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    username: [''],
    email: [''],
    password: ['']
  });

  registro: string;
  registro$: Subscription;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  onSubmit(){
    console.log('method');
    this.registro$ = this.loginService.createRegistro(this.profileForm.value).subscribe(entry =>{
      console.log('registro desde el front',entry);

    });
    console.warn(this.profileForm.value);
  }
  
  ngOnInit(): void {
    this.onSubmit();
  }
  ngOnDestroy(): void {
    this.registro$.unsubscribe();
  }

}
