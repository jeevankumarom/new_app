import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private router :Router) {}
    username:string;
    password:any;

  ngOnInit() {
    
  }
  Login_user(){
      if(this.username == "jeevan" && this.password == "Jeevan@123"){
        console.log("welcome");
        this.router.navigate(["dashboard"])
      }else{
        console.log("Check the username and Password")
        alert("Check the username and Password")
      }
    }
}
