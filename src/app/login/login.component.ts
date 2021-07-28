import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : {
    email : string,
    password : string,
    role : 'admin' | undefined
  }[] = [];

  userNotFound : boolean = false;

  email! : string;
  password! : string;

  constructor( private authService : AuthService, private router : Router ) { 
    this.authService.getUsers().subscribe( res => {
      console.log(res);
      
      this.users = res;
    } )
  }

  ngOnInit(): void {
  }

  checkUser(){
    console.log('checkuser called');

    let logginUser = this.users.find(user => (user.email === this.email) && (user.password === this.password));
    console.log(logginUser);
    
    if(logginUser) {
      console.log('trovato');
      console.log(logginUser.role);

      this.userNotFound = false;
      this.authService.changeUserRole(logginUser.role);
      this.router.navigate(['/']);
    } else {
      console.log('non lo trovo');
      this.authService.role = undefined;
      this.userNotFound = true;
    }
  }

}
