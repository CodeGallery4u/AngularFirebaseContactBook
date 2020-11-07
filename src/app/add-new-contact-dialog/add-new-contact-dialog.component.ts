import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DBService } from '../db.service';

@Component({
  templateUrl: './add-new-contact-dialog.component.html',
  styleUrls: ['./add-new-contact-dialog.component.css']
})
export class AddNewContactDialogComponent implements OnInit {


  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  })

  constructor(public dialogRef: MatDialogRef<AddNewContactDialogComponent>, private _dbService: DBService) { }

  ngOnInit(): void {
  }

  AddContact() {
    // console.log("Add Record Clicked")
    // console.log(this.contactForm.value)
    this._dbService.addContact(this.contactForm.value).subscribe(res => {
      console.log(res)
      this.dialogRef.close()
    })

  }

}
