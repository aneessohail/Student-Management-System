import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
email="";
password="";
constructor(private auth:AuthService){}
login(){
  if(this.email=="" && this.password==""){
    alert("Enter The Missing Credentials")
}
this.auth.login(this.email,this.password);
this.email="";
this.password="";
}

//google method
google(){
  this.auth.google();
}
}
