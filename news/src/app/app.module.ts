import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { UserwelcomeComponent } from './components/userwelcome/userwelcome.component';
import { ArticleitemComponent } from './components/articleitem/articleitem.component';
import { SportsComponent } from './components/sports/sports.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { ScienceComponent } from './components/science/science.component';
import { IndigenousComponent } from './components/indigenous/indigenous.component';
import { FinancialComponent } from './components/financial/financial.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    UserwelcomeComponent,
    ArticleitemComponent,
    SportsComponent,
    EntertainmentComponent,
    PoliticsComponent,
    ScienceComponent,
    IndigenousComponent,
    FinancialComponent,
    UserListComponent,
    ArticleListComponent,
    CommentListComponent,
    AdminpageComponent,
    CategoryListComponent,
    CategoryFormComponent,
    ArticleFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
