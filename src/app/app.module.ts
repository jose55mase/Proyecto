
/* ----------------------------- IMPORTACIONES ----------------------------------------*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as jquery from 'jquery';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatExpansionModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

/* ////----------------------------- IMPORTACIONES ------------------------------------ */

/* ----------------------------- COMPONENTES ----------------------------------------- */

import { AppComponent } from './app.component';

import { ServiciosUsuarios } from './vistaUsuarios/ServiciosUsuarios';
import { UsuariosComponent } from './vistaUsuarios/usuarios.component';





/* /////----------------------------- COMPONENTES ------------------------------------ */


/* ----------------------------- RUTAS ------------------------------------ */


const routes: Routes = [  
  //{ path: 'usuario', component: UsuariosComponent },
  
];

/* ////----------------------------- RUTAS ------------------------------------ */


@NgModule({
  declarations: [
     AppComponent
     ,UsuariosComponent





  ],

  exports: [
    UsuariosComponent
    
  ],

  imports: [
    //RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  /* ----------------------------- VENTAS MODALES ------------------------------------ */

  entryComponents: [
  
  ],

  /* ///----------------------------- VENTAS MODALES ------------------------------------ */

  providers: [ ServiciosUsuarios ],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }
export class PizzaPartyAppModule { }
