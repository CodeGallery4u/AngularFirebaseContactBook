import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnglarMaterialModule } from "./anglar-material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsComponent } from './contacts/contacts.component';
import { AddNewContactDialogComponent } from './add-new-contact-dialog/add-new-contact-dialog.component';
import { DeleteContactDialogComponent } from './delete-contact-dialog/delete-contact-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddNewContactDialogComponent,
    DeleteContactDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    AnglarMaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [AddNewContactDialogComponent, DeleteContactDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
