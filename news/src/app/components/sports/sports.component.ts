import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.route.navigateByUrl("/")
  }
  sportsPage(){
    this.route.navigateByUrl("/sports")
  }

}
