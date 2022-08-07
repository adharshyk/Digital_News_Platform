import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.route.navigateByUrl("/")
  }
  sciencePage(){
    this.route.navigateByUrl("/science")
  }
}
