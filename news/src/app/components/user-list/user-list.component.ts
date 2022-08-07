import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserhandlingService } from 'src/app/service/userhandling.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users : User[] 
  constructor(private userservice : UserhandlingService) { }

  ngOnInit(): void {
    this.listOfUsers()
  }

listOfUsers(){
  this.userservice.getAllUsers().subscribe(data => {
    console.log(data)
    this.users = data
  })
}

deleteUser(userid :number){
  this.userservice.deleteUser(userid).subscribe(data => {
   console.log('deleted')
   this.listOfUsers()
 })   
   }

}

