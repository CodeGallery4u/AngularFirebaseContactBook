import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { contact } from '../contacts/contacts.component';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  })

  constructor(public dialogRef: MatDialogRef<EditContactComponent>,
             @Inject(MAT_DIALOG_DATA) public data: contact) { }

  ngOnInit(): void {
    this.contactForm.controls.name.setValue(this.data.name)
    this.contactForm.controls.contactNo.setValue(this.data.contactNo)
    this.contactForm.controls.email.setValue(this.data.email)
  }

  UpdateContact() {
   //update service call
  }

}