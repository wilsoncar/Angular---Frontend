import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-is-active',
  templateUrl: './is-active.component.html',
  styleUrls: ['./is-active.component.css']
})
export class IsActiveComponent implements OnInit {

  profileForm = this.fb.group({
    username: [''],
    token: ['']
  });

  registro: string;
  IsActive$: Subscription;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  onSubmit(){
    console.log('method');
    this.IsActive$ = this.loginService.IsActive(this.profileForm.value).subscribe(entry =>{
      console.log('Token validado desde el front',entry);

    });
    console.log(this.profileForm.value);
  }
  
  ngOnInit(): void {
    this.onSubmit();
  }
  ngOnDestroy(): void {
    this.IsActive$.unsubscribe();
  }

}
