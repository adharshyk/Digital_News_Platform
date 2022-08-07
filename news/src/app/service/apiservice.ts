import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { Likes } from '../models/likes';
import { Articles } from '../models/articles';



@Injectable({
    providedIn: 'root'
})

export class apiservice {
    httpClient: any;
    public isUserLoggedIn: boolean = false
    public userId: number = 0
    public loggedinuser: User
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<any>("http://localhost:8080/api/user")
            .pipe(map((res: any) => {
                return res;
            })
            )
    }

    // AddStaff(body:any){
    //     this.http.post(this.url,body)
    //     .subscribe(
    //       response => {
    //       console.log(response)
    //       return(response)
    //     },
    //     e => {
    //       console.log(e.error); 
    //       this.popup.SetPopup(true,e.error)
    //       let result = e.status} 
    //     )
    //   }
    // Observable<User>
    saveUser(user: User) {
        console.log(user)

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': 'auth-token',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.http.post<User>("http://localhost:8080/api/user", user, httpOptions)
            .subscribe(
                response => {
                    console.log(response)
                    return (response)
                },
                e => {
                    console.log(e.error);

                    let result = e.status
                }
            )
    }


    addComment(comment: Comment) {
        console.log(comment)

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': 'auth-token',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.http.post<Comment>("http://localhost:8080/api/comments", comment, httpOptions)
            .subscribe(
                response => {
                    console.log(response)
                    return (response)
                },
                e => {
                    console.log(e.error);

                    let result = e.status
                }
            )
    }


    // addComment(comment: Comment): Observable<Comment> {
    //     console.log(comment)

    //     const httOptions = {
    //         headers: new HttpHeaders({
    //             'content-type': 'application/json',
    //             'Authorization': 'auth-token',
    //             'Access-Control-Allow-Origin': '*'
    //         })
    //     }
    //     return this.http.post<Comment>("http://localhost:8080/api/comments", comment, httOptions)
    // }



    addLike(like: Likes) {
        console.log(like)

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': 'auth-token',
                'Access-Control-Allow-Origin': '*'
            })
        };
        this.http.post<Likes>(" http://localhost:8080/api/likes", like, httpOptions)
            .subscribe(
                response => {
                    console.log(response)
                    return (response)
                },
                e => {
                    console.log(e.error);

                    let result = e.status
                }
            )
    }


    GetArticles() {
        return this.http.get<Articles>("http://localhost:8080/api/article")
            .pipe(map((res: any) => {
                console.log("Articles", res)
                return res;
            }))
    }

    getLoggedStatus() {
        return this.isUserLoggedIn;
    }

    setUserLoggedIn() {
        this.isUserLoggedIn = true;
    }

    setUserLoggedOut() {
        this.isUserLoggedIn = false;
    }

    getUserId(): number {
        return this.userId
    }
    setUserId(userId: number) {
        this.userId = userId
    }
    setLoggedInUser(User: User, userId: number) {
        this.userId = userId
        this.loggedinuser = User
    }

    getComments(){
        return this.http.get<any>(" http://localhost:8080/api/comments")
        .pipe(map((res: any) => {
            return res;
        })
        )
    }

}