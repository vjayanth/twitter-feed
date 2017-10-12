import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  constructor(private http: HttpClient,private fireAuth:AngularFireAuth,private router:Router) { }

  ngOnInit() {

    //this.getTweets();


  }

  getToken(){
 
      //      firebase.auth().getRedirectResult().then((result) => {
  // if (result) {
  //         // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  //         // You can use these server side with your app's credentials to access the Twitter API.
  //         var token = result.credential.accessToken;
  //         var secret = result.credential.secret;
  //         // ...
  //       }
  //       console.log(result);
  //       // The signed-in user info.
  //       var user = result.user;
  //       console.log(user);
  //       this.getTweets();
  //     }).catch((error) =>{
  //             // Handle Errors here.
  //             var errorCode = error.code;
  //             var errorMessage = error.message;
  //             // The email of the user's account used.
  //             var email = error.email;
  //             // The firebase.auth.AuthCredential type that was used.
  //             var credential = error.credential;
  //       // ...
  //     });
  }

getTweets(){
  this.http.get('https://api.twitter.com/oauth/authenticate',{headers:new HttpHeaders().set('oauth_token', '866339149220986882-c2mZ3J2WvmFcxp5qbV48ljoDdnbVUBI')})
  .subscribe(data=>{
    console.log(data);
  })
}


logout(){
  localStorage.removeItem('access-token');
  this.router.navigate(['/login']);
}



}
