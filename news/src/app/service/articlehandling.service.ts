import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlehandlingService {
  articleURL = "http://localhost:8080/api/article"
  constructor(private httpclient : HttpClient) { }

  getAllArticles() : Observable<Article[]>{

    console.log("this.httpclient.get<getProductResponse>(this.produrl).pipe(map(Response => Response._embedded.products))")
    return this.httpclient.get<getArticleResponse>(this.articleURL).pipe(map(Response => Response._embedded.articles))
  }

  deleteArticle(artid : number): Observable<Article>{
    const httpOptions = {
      header : new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpclient.delete<Article>(this.articleURL+`/${artid}`)
  }


  saveArticle(article : Article) : Observable<Article>{
    console.log(article)
  
    const httOptions ={
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpclient.post<Article>(this.articleURL,article,httOptions)
  }

  getArticleById(artId : number) : Observable<Article>{
  const artIdURL = "http://localhost:8080/api/article/"+artId;
  console.log("this.httpclient.get<Article>(prodIdURL)")
  return this.httpclient.get<Article>(artIdURL);
}


updateArticle(article : Article):Observable<Article>{
   
  const httpOptions = {
    header : new HttpHeaders({
      'content-Type' : 'application/json',
      'Authorization' : 'auth-token',
      'Access-Control-Allow-Origin' : '*'
    })
  }
  console.log("this.httpclient.put<ArticleCategory>(this.categoryURL+`/${category.categoryId}`,httpOptions)")
  return this.httpclient.put<Article>(this.articleURL+`/${article.articleId}`,httpOptions);
}


}


interface getArticleResponse{
  _embedded : {
    articles : Article[]
  }
}
