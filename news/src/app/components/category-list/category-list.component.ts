import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleCategory } from 'src/app/models/article-category';
import { CategoryhandlingService } from 'src/app/service/categoryhandling.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories : ArticleCategory[] 
  constructor(private categoryservice : CategoryhandlingService, private route : Router,private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfCategories()
   
  }

 

listOfCategories(){
  this.categoryservice.getAllCategories().subscribe(data => {
    console.log(data)
    this.categories = data
  })
}

deleteCategory(catid :number){
  this.categoryservice.deleteCategory(catid).subscribe(data => {
   console.log('deleted')
   this.listOfCategories()
 })   
   }

   updateCategory(catid : number){
    console.log(catid)
    this.route.navigateByUrl("/updateCategory/"+catid)
   }

   addCategory(){
    this.route.navigateByUrl("/addcategory")
   }

}
