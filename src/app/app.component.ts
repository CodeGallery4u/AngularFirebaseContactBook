import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DBService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  userProfilePic$: Observable<string>;
  isLoggedOut$: Observable<boolean>;


  constructor(private _dbService: DBService, private _router: Router, private _afAuth: AngularFireAuth){}
  ngOnInit(){
    this.isLoggedIn$ = this._afAuth.authState.pipe(map(user => !!user))
    this.userProfilePic$ = this._afAuth.authState.pipe(map(user => user ? user.photoURL : null))
    this.isLoggedOut$ = this._afAuth.authState.pipe(map(state => !state))

    this._afAuth.authState.subscribe((response)=>{
      if (response) {
        this._router.navigate(["/Dashboard"])
      } else {
        this._router.navigate(["/Login"])
      }
    });
  }
  title = 'AngularAppLayoutDemo';

  login() {
    console.log('login clicked....')
  }

  logout() {
    console.log('loged out clicked....')
    this._dbService.logOut();
  }
}

