import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  
  onLogout(){
    this.route.navigateByUrl("/")
  }

  financialPage(){
    this.route.navigateByUrl("/financial")
  }
}
