import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AngularFireAuth]
})
export class LoginComponent implements OnInit {


  errorMessage:string='';

  constructor(private auth:AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }


  login(){
    this.auth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(
      (result)=>{
        console.log(result.credential);
        localStorage.setItem('access-token',result.credential.accessToken);
        localStorage.setItem('userkey',result.credential.secret);
          this.router.navigate(['/tweets']);
      }
    )
    .catch((error)=>{
      this.errorMessage=error.message;
    })
  }
}
