import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { apiservice } from 'src/app/service/apiservice';
import { LoggedinuserService } from 'src/app/service/loggedinuser.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  public invalidUser: boolean = false
  public userList !: any[]
  constructor(public apiservice: apiservice,public router :Router,private activeRoute: ActivatedRoute,private loginService:LoggedinuserService) { }

  ngOnInit(): void {
  }

  UserLogin() {
    let userData = {}
    userData = { "Email": this.UserForm.value.email, "Password": this.UserForm.value.password };
    console.log(userData)
    this.apiservice.getUsers().subscribe(res => {
      this.userList=(res._embedded.users)
      var index = this.userList.findIndex(obj => obj.email === this.UserForm.value.email && obj.password === this.UserForm.value.password);
      console.log(this.userList[index])
      if(this.UserForm.value.email == 'admin@gmail.com' && this.UserForm.value.password == 'admin'){
        this.router.navigate(['/admin']);
      }else if(index > -1){
        
        this.router.navigate(['']);
        this.loginService.setUserId(this.userList[index].userId)
        console.log(this.loginService.getUserId())
      }
      else{
        this.invalidUser=true
        setTimeout(() => {
          this.invalidUser = false
        }, 5000);
        
      }
    })
  }
  addUser(){
    
    this.router.navigateByUrl("/register");
  }
}
