import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../Curso';
import { CursosService } from '../cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-detalle',
  templateUrl: './cursos-detalle.component.html',
  styleUrls: ['./cursos-detalle.component.css']
})
export class CursosDetalleComponent implements OnInit {

  @Input() curso!: Curso ;

  constructor(

  ) {

  }

  ngOnInit() {
  }

}
