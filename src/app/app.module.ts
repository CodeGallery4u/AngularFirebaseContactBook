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
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';
import { DBService } from "../app/db.service";
import { AngularFireAuthModule } from '@angular/fire/auth';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddNewContactDialogComponent,
    DeleteContactDialogComponent,
    LoginComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    AnglarMaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  entryComponents: [AddNewContactDialogComponent, DeleteContactDialogComponent, EditContactComponent],
  providers: [DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
