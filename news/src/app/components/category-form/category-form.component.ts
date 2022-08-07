import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleCategory } from 'src/app/models/article-category';
import { CategoryhandlingService } from 'src/app/service/categoryhandling.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  category : ArticleCategory = new ArticleCategory (0,"")
   isEditable : boolean = false;
  constructor(private route:Router, private service : CategoryhandlingService,private activateRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>{this.getCategoryById()});
  }


  getCategoryById(){
    const catid = +this.activateRoute.snapshot.paramMap.get("catid");
    console.log(catid)
    if(catid > 0){
      this.isEditable = true;
      this.service.getCategoryById(catid).subscribe(data => {this.category = data});
    }
  }


  onSubmit(){
    if(this.isEditable){
      this.service.saveCategory(this.category).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/category")
      })
    }
    else{
      this.service.updateCategory(this.category).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/category")
    })   }
}

 


}
