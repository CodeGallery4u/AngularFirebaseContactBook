import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './add-new-contact-dialog.component.html',
  styleUrls: ['./add-new-contact-dialog.component.css']
})
export class AddNewContactDialogComponent implements OnInit {


  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    contactNo: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required])
  })

  constructor(public dialogRef: MatDialogRef<AddNewContactDialogComponent>) { }

  ngOnInit(): void {
  }

  AddContact(){
    console.log("Add Record Clicked")
    console.log(this.contactForm.value)
    this.dialogRef.close()
  }

}
