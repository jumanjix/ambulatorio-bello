import { Component, OnInit } from '@angular/core';
import { faUserMd, faVial, faFileMedical, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faDoc = faUserMd;
  faLab = faVial;
  faMedLav = faUserCog;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
