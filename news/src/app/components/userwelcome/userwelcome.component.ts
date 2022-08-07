import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userwelcome',
  templateUrl: './userwelcome.component.html',
  styleUrls: ['./userwelcome.component.css']
})
export class UserwelcomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.route.navigateByUrl("/")
  }

 
  sportsPage(){
    this.route.navigateByUrl("/sports")
  }

  entertainmentPage(){
    this.route.navigateByUrl("/entertainment")
  }

  politicsPage(){
    this.route.navigateByUrl("/politics")
  }

  financialPage(){
    this.route.navigateByUrl("/financial")
  }

  sciencePage(){
    this.route.navigateByUrl("/science")
  }

  indigenousPage(){
    this.route.navigateByUrl("/indigenous")
  }

}
