import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AddNewContactDialogComponent } from '../add-new-contact-dialog/add-new-contact-dialog.component';
import { DBService } from '../db.service';
import { DeleteContactDialogComponent } from '../delete-contact-dialog/delete-contact-dialog.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public dialog: MatDialog, private _dbService: DBService) { }
  displayedColumns: string[] = ['index', 'name', 'contactNo', 'email', 'action'];
  // dataSource = new MatTableDataSource<contact[]>();
  dataSource: MatTableDataSource<contact>;

  contacts$: Observable<contact[]>;

  ngOnInit(): void {
    this.contacts$ = this._dbService.getAllContacts()

    this.contacts$.subscribe(res => {
      this.dataSource = new MatTableDataSource<contact>(res)
    })
  }

  AddContact() {
    let dialog = this.dialog.open(AddNewContactDialogComponent);
    dialog.afterClosed().subscribe((res) => console.log(res))
  }

  DeleteContact(element: contact) {
    let dialog = this.dialog.open(DeleteContactDialogComponent, {
      data: element
    });
    dialog.afterClosed().subscribe((res) => console.log(res))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(element: contact){
    let dialog = this.dialog.open(EditContactComponent, {
      data: element
    });
    dialog.afterClosed().subscribe((res) => console.log(res))
  }

}


export interface addContact {
  name: string;
  contactNo: number;
  email: string;
}
export interface contact extends addContact {
  id: string
}
