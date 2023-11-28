import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosListarComponent } from './Cursos/cursos-listar/cursos-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosComponent } from './Cursos/Cursos.component';
import { CursosDetalleComponent } from './Cursos/cursos-detalle/cursos-detalle.component';
import { CursosModule } from './Cursos/Cursos.module';

@NgModule({
  declarations: [			
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
