import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-Cursos',
  templateUrl: './Cursos.component.html',
  styleUrls: ['./Cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
