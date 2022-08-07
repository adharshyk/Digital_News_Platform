import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlehandlingService } from 'src/app/service/articlehandling.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles : Article[] 
  constructor(private articleservice : ArticlehandlingService,private route: Router) { }

  ngOnInit(): void {
    this.listOfArticles()
  }

listOfArticles(){
  this.articleservice.getAllArticles().subscribe(data => {
    console.log(data)
    this.articles = data
  })
}

deleteArticle(articleid :number){
  this.articleservice.deleteArticle(articleid).subscribe(data => {
   console.log('deleted')
   this.listOfArticles()
 })   
   }


   addArticle(){
  this.route.navigateByUrl("/addArticle")
   }

   updateArticle(articleid: number){
    this.route.navigateByUrl("/updateArticle/"+articleid)
   }



}
