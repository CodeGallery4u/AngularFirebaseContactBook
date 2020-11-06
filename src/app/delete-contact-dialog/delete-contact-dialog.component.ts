import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { contact } from '../contacts/contacts.component';

@Component({
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.css']
})
export class DeleteContactDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: contact,
    public dialogRef: MatDialogRef<DeleteContactDialogComponent>) { }

  ngOnInit(): void {
  }

  DeleteContact() {
    console.log("Delete Contact Clicked")
    console.log(this.data)
    this.dialogRef.close();
  }
}
