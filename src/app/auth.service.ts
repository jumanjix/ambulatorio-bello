import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'https://60e7113c15387c00173e4a54.mockapi.io/';

  role: 'admin' | undefined;
  roleChange: Subject< 'admin' | undefined > = new Subject< 'admin' | undefined >();

  canRoute!: boolean;

  constructor( private http : HttpClient, private router : Router ) { 
    this.roleChange.subscribe( val => this.role = val );
  }

  getUsers() {
    return this.http.get<{email : string, password : string, role : 'admin' | undefined }[]>(this.apiUrl + 'users');
  }

  changeUserRole( user : 'admin' | undefined ) {
    this.roleChange.next(user);
  }

  isAuthenticated( route: ActivatedRouteSnapshot ) {
    this.canRoute = false;
    console.log(    this.role
      );
    
    switch( route.routeConfig?.path ) {
      
      case 'elenco-prenotazioni':
        if (this.role === 'admin') { this.canRoute = true }
        break;
      case 'richieste-medico-lavoro':
        if (this.role === 'admin') { this.canRoute = true }
        break;
      // aggiungere casi se necessario TODO: login
    }

    if( !this.canRoute ) {
      this.router.navigate(['/']);
    }

    return this.canRoute;
  }
}
