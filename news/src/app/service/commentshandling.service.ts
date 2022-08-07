import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticleCategory } from '../models/article-category';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentshandlingService {
  commentURL = "http://localhost:8080/api/comments"
  constructor(private httpclient : HttpClient) { }

  getAllComments() : Observable<Comments[]>{
    return this.httpclient.get<getCommentResponse>(this.commentURL).pipe(map(Response => Response._embedded.commentses))
  }

  deleteComment(comtid : number): Observable<Comments>{
    const httpOptions = {
      header : new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpclient.delete<Comments>(this.commentURL+`/${comtid}`)
  }

  updateComment(article : Article):Observable<Article>{
    console.log(article)
    const httpOptions = {
      header : new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
   
    return this.httpclient.put<Article>(this.commentURL+'/'+'${article.articleId}',httpOptions) 
  }
}


interface getCommentResponse{
  _embedded : {
    commentses : Comments[]
  }
}
