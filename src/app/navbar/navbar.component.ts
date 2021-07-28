import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role?: 'admin';

  constructor( private authService : AuthService) { 
    this.authService.roleChange.subscribe( (res) => {
      console.log(res);
      
      this.role = this.authService.role
    } );
  }

  ngOnInit(): void {
  }

}
