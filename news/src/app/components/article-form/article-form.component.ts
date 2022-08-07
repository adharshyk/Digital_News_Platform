import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlehandlingService } from 'src/app/service/articlehandling.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor(private articleService : ArticlehandlingService,private route : Router,private activateRoute : ActivatedRoute) { }
article : Article = new Article(0,"","","",0,0,0,"")
iseditable : boolean = false;  

ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => {this.getArticleById()})
  }


  getArticleById(){
    const artId = +this.activateRoute.snapshot.paramMap.get("artid")
    console.log(artId)
    if(artId > 0){
      this.iseditable = true
      this.articleService.getArticleById(artId).subscribe(data => {
        this.article = data;
      })
    }
  }

  onSubmit(){
    if(this.iseditable){
      this.articleService.updateArticle(this.article).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/articlelist")
      })
    }
    else{
      this.articleService.saveArticle(this.article).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/articlelist")
    })   }
}

}

 
