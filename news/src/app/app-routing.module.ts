import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserwelcomeComponent } from './components/userwelcome/userwelcome.component';
import { SportsComponent } from './components/sports/sports.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { ScienceComponent } from './components/science/science.component';
import { IndigenousComponent } from './components/indigenous/indigenous.component';
import { FinancialComponent } from './components/financial/financial.component';
import { User } from './models/user';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';




const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userwelcome', component: UserwelcomeComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'indigenous', component: IndigenousComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'financial', component: FinancialComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: 'articlelist', component: ArticleListComponent },
  { path: 'comments', component: CommentListComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'addcategory', component: CategoryFormComponent },
  { path: 'updateCategory/:catid', component: CategoryFormComponent },
  { path: 'addArticle', component: ArticleFormComponent },
  { path: 'updateArticle/:artid', component: ArticleFormComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
