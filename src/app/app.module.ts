import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./modules/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { HttpClientModule } from "@angular/common/http";
import { ShowFieldErrorDirective } from './show-field-error.directive';
import { FieldErrorComponent } from './components/field-error/field-error.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    ShowFieldErrorDirective,
    FieldErrorComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  entryComponents: [
    FieldErrorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
