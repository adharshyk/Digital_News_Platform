import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from 'src/app/models/articles';
import { Likes } from 'src/app/models/likes';
import { apiservice } from 'src/app/service/apiservice';
import { Comment } from 'src/app/models/comment';
import { LoggedinuserService } from 'src/app/service/loggedinuser.service';
import { CommentshandlingService } from 'src/app/service/commentshandling.service';
import { Comments } from 'src/app/models/comments';
import { UserhandlingService } from 'src/app/service/userhandling.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-articleitem',
  templateUrl: './articleitem.component.html',
  styleUrls: ['./articleitem.component.css']
})
export class ArticleitemComponent implements OnInit {

  @Input()
  article!: Articles;


  ngOnInit(): void {

    this.articleLike = this.article.likesCount


  }

  comment: Comment = new Comment("", 0, 0);
  like: Likes = new Likes(0, 0);
  public articleList: Articles[]
  public commentList: Comments[]
  public articleLike: number
  public setArticle: boolean = true
  users: User[]
  constructor(private route: Router, private apiservice: apiservice, private loginService: LoggedinuserService,
    private commentService: CommentshandlingService, private userService: UserhandlingService) { }




  addComment() {
    this.comment.articleId = this.article.articleId
    this.comment.userId = this.loginService.getUserId()
    // this.commentList.push(this.comment)
    console.log(this.comment)
    this.apiservice.addComment(this.comment)
  }

  addLike() {

    this.like.articleId = this.article.articleId
    this.like.userId = this.loginService.getUserId()
    console.log(this.like)

    if (this.setArticle) {
      this.apiservice.addLike(this.like)
      this.articleLike += 1
      this.setArticle = false
    }

  }

  isUserLoggedIn(): boolean {
    if (this.loginService.getUserId() != 0) {
      return true
    }
    else {
      return false
    }
  }

  listOfUsers() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data)
      this.users = data
    })
  }
}
