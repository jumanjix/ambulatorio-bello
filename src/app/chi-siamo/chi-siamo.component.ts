import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';


@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css']
})
export class ChiSiamoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToBooking(){
    this.router.navigate(['prenotazioni']);
    }

}
