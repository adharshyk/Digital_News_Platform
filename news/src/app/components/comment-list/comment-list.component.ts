import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from 'src/app/models/comments';
import { CommentshandlingService } from 'src/app/service/commentshandling.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments : Comments[] 
  constructor(private commentservice : CommentshandlingService,private route: Router) { }

  ngOnInit(): void {
    this.listOfComments()
  }

listOfComments(){
  this.commentservice.getAllComments().subscribe(data => {
    console.log(data)
    this.comments = data
  })
}

  deleteComment(comtid :number){
    this.commentservice.deleteComment(comtid).subscribe(data => {
     console.log('deleted')
     this.listOfComments()
   })  
}

// updateComment(commentid :number){
//   this.route.navigateByUrl("/update/"+commentid)
//  }
}
