import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './Cursos.component';
import { CursosListarComponent } from './cursos-listar/cursos-listar.component';
import { CursosDetalleComponent } from './cursos-detalle/cursos-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursosDetalleComponent,CursosListarComponent],
  exports: [CursosComponent, CursosDetalleComponent ,CursosListarComponent]
})
export class CursosModule { }
