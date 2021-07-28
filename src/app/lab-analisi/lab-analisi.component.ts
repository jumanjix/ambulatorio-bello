import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-analisi',
  templateUrl: './lab-analisi.component.html',
  styleUrls: ['./lab-analisi.component.css']
})
export class LabAnalisiComponent implements OnInit {

  branche : string[] = [
    "Laboratorio Generale di Base",
    "Chimica Clinica",
    "Cito Istopatologia",
    "Ematologia",
    "Immunosierologia",
    "Microbiologia",
    "Tossicologia"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
