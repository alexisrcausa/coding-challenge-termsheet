import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DealsListComponent } from "./components/DealList/DealsList.component";
import { DealFormComponent } from "./components/DealForm/DealForm.component";

@NgModule({
  declarations: [
    AppComponent,
    DealsListComponent,
    DealFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
