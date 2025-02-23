import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription, throwError } from 'rxjs';
import {catchError, take, tap} from 'rxjs/operators';
import { User } from '../model/user.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';


export interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{
//public user=new BehaviorSubject<User>(null);
public role=new BehaviorSubject<string>(null);
subscription:Subscription;
private _tokenExpiratioTimer:any;
  constructor(private httpClient:HttpClient,private router:Router,private store:Store<fromApp.AppState>) { }

  setRole(role:string){
    this.role.next(role);
  }
  
  autoLogout(expirationDuration:number){
    this._tokenExpiratioTimer=setTimeout(()=>{
      //this.logout();
      this.store.dispatch(new AuthActions.Logout());
    },expirationDuration);
  }

  clearLogoutTimer(){
    if(this._tokenExpiratioTimer){
      clearTimeout(this._tokenExpiratioTimer);
      this._tokenExpiratioTimer=null;
    }
  }

   handleAuthentication(email:string,userId:string,token:string,expiresIn:number,role:string){
    const expirationDate=new Date(new Date().getTime()+expiresIn*1000);
    const user=new User(email,userId,token,expirationDate);
    //this.user.next(user);
    this.store.dispatch(new AuthActions.Login({
      email:email,
      userId:userId,
      token:token,
      expirationDate:expirationDate,
      role:role
    })
    );
    localStorage.setItem('userData',JSON.stringify(user));
  }

   handleError(errorRes:HttpErrorResponse){
    console.log(errorRes);
    let errorMessage="An unknown error occured!";
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage='This email already exist.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage='This email does not exist';
          break;
        case 'INVALID_PASSWORD':
          errorMessage='The password is incorrect';
          break;
        case 'MISSING_EMAIL':
          errorMessage='The email does not exist';
          break;
      }
      return throwError(errorMessage);
  }

   userRole(){
      return this.httpClient.get('https://airlines-d4a3f-default-rtdb.firebaseio.com/userRoles.json').pipe(catchError(this.handleError));
  }

  googleSignIn(idToken){
    return this.httpClient.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyCIZsIF3etNReFdcphEOKK57jAXFXoB2p8',
    {"postBody":`id_token=${idToken}&providerId=google.com`,
    "requestUri":'http://localhost:4200',
    "returnIdpCredential":true,
    "returnSecureToken":true
    });
  }
  forgetPassword(email){
    return this.httpClient.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCIZsIF3etNReFdcphEOKK57jAXFXoB2p8',{
      requestType:'PASSWORD_RESET',
      email:email
    }).pipe(catchError(this.handleError) );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
