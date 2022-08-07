import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArticleCategory } from '../models/article-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryhandlingService {
  categoryURL = "http://localhost:8080/api/articlecategory"
  constructor(private httpclient : HttpClient) { }

  getAllCategories() : Observable<ArticleCategory[]>{
   console.log("this.httpclient.get<getCategoryResponse>(this.categoryURL).pipe(map(Response => Response._embedded.articleCategories))")
    return this.httpclient.get<getCategoryResponse>(this.categoryURL).pipe(map(Response => Response._embedded.articleCategories))
  }

  saveCategory(category : ArticleCategory) : Observable<ArticleCategory>{
    console.log(category)
  
    const httOptions ={
      headers : new HttpHeaders({
        'content-type' : 'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpclient.post<ArticleCategory>(this.categoryURL,category,httOptions)
  }


  getCategoryById(catid : number):Observable<ArticleCategory>{
    const CatURL = "http://localhost:8080/api/articlecategory/"+catid;
    return this.httpclient.get<ArticleCategory>(CatURL);
  }
  
  deleteCategory(catid : number): Observable<ArticleCategory>{
    const httpOptions = {
      header : new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpclient.delete<ArticleCategory>(this.categoryURL+`/${catid}`)
  }

  updateCategory(category : ArticleCategory):Observable<ArticleCategory>{
   
    const httpOptions = {
      header : new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    console.log("this.httpclient.put<ArticleCategory>(this.categoryURL+`/${category.categoryId}`,httpOptions)")
    return this.httpclient.put<ArticleCategory>(this.categoryURL+`/${category.categoryId}`,httpOptions);
  }

}



interface getCategoryResponse{
  _embedded : {
    articleCategories : ArticleCategory[]
  }
}
