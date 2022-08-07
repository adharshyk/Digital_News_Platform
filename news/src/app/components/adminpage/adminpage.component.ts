import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  userList(){
  this.route.navigateByUrl("/userlist")
  }

  articleList(){
    this.route.navigateByUrl("/articlelist")
  }

  commentsList(){
    this.route.navigateByUrl("/comments")
  }

  categoryList(){
    this.route.navigateByUrl("/category")
  }
}
