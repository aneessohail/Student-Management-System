import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr'
import { GoogleAuthProvider } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router,private toast:ToastrService) { }

  // definning the login method
  login(email :string,password:string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(()=>{
      localStorage.setItem('token','true');
      this.toast.info("You Have Now Logged In Successfully")
      this.router.navigate(['/dashboard']);
  },err=>{
    this.toast.error(err.message);
    this.router.navigate(['/login'])
  })}
  // defiining the register up method

register(email : string , password : string ){
  this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
    this.toast.success("You Have Now Logged In Successfully")
    this.router.navigate(['/login'])
  },err=>{
    this.toast.error("This Email Is Already Registered");
  })
}
//definning logout method
logout(){
  this.fireauth.signOut().then(()=>{
    localStorage.removeItem('token');
    this.toast.error("You Are Logged Out Now");
    this.router.navigate(['/login'])
},err=>{
  this.toast.error(err.message);
})}

google(){
this.fireauth.signInWithPopup(new GoogleAuthProvider).then((res)=>{
  this.router.navigate(['/dashboard'])
  this.toast.success("Successfully Logged In using Google","Success")
  localStorage.setItem('token',JSON.stringify(res.user?.uid));
},err=>{
  this.toast.error("Something Went Wrong! Please Try Again!!","Error")
})
}
}
