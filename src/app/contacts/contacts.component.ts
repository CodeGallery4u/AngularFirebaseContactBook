import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { AddNewContactDialogComponent } from '../add-new-contact-dialog/add-new-contact-dialog.component';
import { DeleteContactDialogComponent } from '../delete-contact-dialog/delete-contact-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  displayedColumns: string[] = ['index', 'name', 'contactNo', 'email', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {

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

}


const ELEMENT_DATA: contact[] = [
  { name: 'safder', contactNo: 986033123123, email: 'safder123@gmai.com', id: "" },
];

export interface contact {
  name: string;
  contactNo: number;
  email: string;
  id: string
}
