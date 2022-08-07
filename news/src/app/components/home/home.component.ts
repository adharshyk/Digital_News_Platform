import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/comment';
import { apiservice } from 'src/app/service/apiservice';
import { Likes } from 'src/app/models/likes';
import { Articles } from 'src/app/models/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  comment:Comment = new Comment("",1001,2);
  like: Likes = new Likes(1001,2);
  public articleList : Articles[]
   public isLogin : boolean =false

  constructor(private route : Router,private apiservice:apiservice) { }

  ngOnInit(): void {
    this.GetArticlesList()
  }
 
  userWelcomePage(){
    this.isLogin =true
    this.route.navigateByUrl("/login")
  }

  addComment(){
    this.apiservice.addComment(this.comment)
  }

  addLike(){
    this.apiservice.addLike(this.like)
  }

  GetArticlesList(){
    this.apiservice.GetArticles().subscribe(res => {
        
        this.articleList = res._embedded.articles;
        console.log(this.articleList)
      })
    }




  // likeButtonClick(){
  //   this.route++;
  // }

  
}
