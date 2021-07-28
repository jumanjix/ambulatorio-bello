import { Component, OnInit } from '@angular/core';
import { MedLavInfo } from '../med-lav-info';
import { MedLavService } from '../med-lav.service';

@Component({
  selector: 'app-lista-medlav-info',
  templateUrl: './lista-medlav-info.component.html',
  styleUrls: ['./lista-medlav-info.component.css']
})
export class ListaMedlavInfoComponent implements OnInit {

  richieste : MedLavInfo[] = [];

  constructor( private serviceMedLav: MedLavService ) { 
    this.serviceMedLav.getRichiesteMedLav().subscribe( data => {
      this.richieste = data;
    })
  }

  ngOnInit(): void {
  }

}
