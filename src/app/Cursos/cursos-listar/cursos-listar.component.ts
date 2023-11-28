import { Component, OnInit } from '@angular/core';
import { Curso } from '../Curso';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-cursos-listar',
  templateUrl: './cursos-listar.component.html',
  styleUrls: ['./cursos-listar.component.css']
})
export class CursosListarComponent implements OnInit {
  cursos: Array<Curso> = [];
  tienecurso: boolean= false;
  nombres : Array<number> = [];
  selected: boolean = false;
  selectedCursos!: Curso;

  constructor(private cursoService: CursosService) { }

  getCursos(): void {
    this.cursoService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
      this.tienecurso = false;
      this.cursos.forEach((curso) => {
        if (curso.offers_certificate !== this.tienecurso) {
          this.nombres.push(curso.id);
        }
      });
    });
  }

  onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCursos = curso;
  }

  ngOnInit() {
    this.getCursos();
  }

}
