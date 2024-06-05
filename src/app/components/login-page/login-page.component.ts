import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username!:any;
  password!:any;
  confirmPassword!:any;

  

  constructor(private route:Router,public snackRef: MatSnackBar, ) {}
    
  
   

  ngOnInit(): void {
    
  }
  login(){
    if (this.username==="priyasha" && this.password==="1234" ){
      localStorage.setItem('user',this.username)
      alert("Login Successful")
      this.route.navigate(['dashboard/assignment'])
      this.snackRef.open('Logged in Successfully',"Successful User",{
        duration:1000
      })
    }
    else{
      alert("Invalid Username or Password, go to register")
    }

  }
  register(){
    if(this.username!=null && this.password!=null && this.confirmPassword!=null && this.password===this.confirmPassword){
      alert("Registered Successfully")
      this.route.navigate(['dashboard/assignment'])
      this.snackRef.open('Registered Successfully',"Successful User",{
        duration:1000
      })
    }
  }

}
