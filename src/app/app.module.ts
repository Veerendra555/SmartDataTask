import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PatientsListComponent } from '../app/task/patients-list/patients-list.component';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
