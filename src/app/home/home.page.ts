

import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Form, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Component } from '@angular/core';
// import{list} from '../../assets/list.json'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  username:string;
  password:any;
  mylist:any;
  // registrationform:FormGroup;
  
  
  // get username(){
  //   console.log("username");
  //   return this.registrationform.get('username');
  // }
  // get password(){
  //   console.log("password");
  //   return this.registrationform.get('password');
  // }
  // public errormessage={
  //   username:[
  //     {type:'required',message:'Name is required'},
  //     // {type:'maxlength',message:'Name cant be longer then 100 character'}
  //     console.log("jeevan")
  //   ],
  //   password:[
  //     {type:'required',message:'Password is required'},
  //     // {type:'maxlength',message:'Please enter your valid 7 character password'}
  //   ]
  // }
  
  
  constructor(private set:NavController,private http:HttpClient) {
    console.log("jeeva");

  }

  // public submit(){
    
  //   console.log(this.registrationform.value);

  // }
  ngOnInit(){
    fetch('../../assets/list.json').then((test) =>{
      test.json()}).then((result) => this.mylist=result)
      
  }



   saveuserdata(name,roolno,address,standard){
    var datatosend={
      name,roolno,address,standard
};
  var url="http://localhost:3300/";
  console.log("hi");
    this.http.post(url,datatosend,{responseType: 'text'}).subscribe(data =>{
      console.log(data)
    })
  }



      login(){
        if(this.username == "jeevan" && this.password == "jeevan@123"){
          console.log("welcome");
          this.set.navigateBack("/dashboard")
        }else if(this.username == "jeevan"){
          alert("password is incorrect")
          console.log("username is validated")
        }else if(this.password =="jeevan@123"){
          console.log("password is validated")
          alert("username is incorrect")
        }else{
          alert("username and password is incorrect")
        }
      }

    }
      


  
  
  
        

// new_login(){
//   if(this.username == "jeevan" && this.password == "jeevan@123")
//   {
//     console.log("welcome");
//     this.set.navigateBack("/dashboard")
//   }else{
//     if(this.username == "jeevan" || this.password == "jeevan@123"){
//       console.log("......")
//       if(this.username=="jeevan"){
//         console.log("jeevan is validated")
//         alert("password is wrong")
//       }else{
//         alert("username is incorrect")
//       }

//     }else{
      
//       alert("username and password is incorrect")
//     }
// }

// }

