import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indigenous',
  templateUrl: './indigenous.component.html',
  styleUrls: ['./indigenous.component.css']
})
export class IndigenousComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.route.navigateByUrl("/")
  }
  indigenousPage(){
    this.route.navigateByUrl("/indigenous")
  }
}
