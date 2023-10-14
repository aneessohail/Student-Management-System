import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
email="";
password="";
constructor(private auth :AuthService){}
register(){
  if (this.email == "" && this.password=="")
  {alert("PLease Enter The Missing Credentials ")}
  this.auth.register(this.email ,this.password);
  this.email="";
  this.password="";
}
}
