import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['index', 'name', 'contactNo', 'email','action'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    
  }

}


const ELEMENT_DATA: contact[] = [
  { name: 'safder', contactNo: 9860335406, email: 'siddiquisafder@gmai.com' },
];

export interface contact {
  name: string;
  contactNo: number;
  email: string;
}