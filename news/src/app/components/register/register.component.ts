import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { apiservice } from 'src/app/service/apiservice';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User("","","",0,"","",new Date())
  constructor(private apiservice: apiservice,public router :Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.apiservice.saveUser(this.user)
    // .subscribe(data=>{
    //   console.log(data)
      // this.router.navigateByUrl("/welcome");
    // });
    console.log(this.user)
    this.router.navigate(['/login']);
  }

}
