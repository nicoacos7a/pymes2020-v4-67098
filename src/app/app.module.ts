import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MockArticulosFamiliasService } from './services/mock-articulos-familias.service';

import { HttpClientModule } from '@angular/common/http';
import { ArticulosFamiliasService } from './services/articulos-familias.service';

import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MockArticulosService } from './services/mock-articulos.service';

import { ReactiveFormsModule } from "@angular/forms";
import { ArticulosService } from './services/articulos.service';

import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports:
  [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' }
      ]),
      ReactiveFormsModule,
      NgbPaginationModule,
    ],
  declarations: 
  [ 
    AppComponent, 
    InicioComponent, 
    ArticulosFamiliasComponent, 
    MenuComponent, 
    ArticulosComponent 
  ],
  bootstrap:
  [
    AppComponent
  ],
  providers:
  [
    MockArticulosFamiliasService, 
    ArticulosFamiliasService,  
    { provide: APP_BASE_HREF, useValue: "/", providers: [MockArticulosService], providers: [ArticulosService] }
  ]
})
export class AppModule { }
