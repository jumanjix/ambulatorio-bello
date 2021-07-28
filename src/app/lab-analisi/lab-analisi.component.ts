import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lab-analisi',
  templateUrl: './lab-analisi.component.html',
  styleUrls: ['./lab-analisi.component.css']
})
export class LabAnalisiComponent implements OnInit {

  // elenco branche specialistiche
  branche : string[] = [
    "Laboratorio Generale di Base",
    "Chimica Clinica",
    "Cito Istopatologia",
    "Ematologia",
    "Immunosierologia",
    "Microbiologia",
    "Tossicologia"
  ];

  // puntatore elenco
  freccia = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
