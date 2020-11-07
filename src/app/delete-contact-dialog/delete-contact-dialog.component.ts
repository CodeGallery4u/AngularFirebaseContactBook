import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { contact } from '../contacts/contacts.component';
import { DBService } from '../db.service';

@Component({
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.css']
})
export class DeleteContactDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: contact,
    public dialogRef: MatDialogRef<DeleteContactDialogComponent>,
    private _dbService: DBService) { }

  ngOnInit(): void {
  }

  DeleteContact() {
    this._dbService.delete(this.data.id).subscribe(res =>{
      this.dialogRef.close();
    })    
  }
}
