import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.route.navigateByUrl("/")
  }
  politicsPage(){
    this.route.navigateByUrl("/politics")
  }
}
