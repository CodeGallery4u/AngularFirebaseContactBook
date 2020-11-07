import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { addContact, contact } from './contacts/contacts.component';
const DBCollections = {
  contacts: 'contacts'
}

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private _angularFirestore: AngularFirestore) { }

  getAllContacts() {
    return this._angularFirestore.collection(DBCollections.contacts, ref => ref.orderBy('name', "asc")).snapshotChanges().pipe(
      map(snaps => {
        return snaps.map(snap => {
          return <contact>{
            id: snap.payload.doc.id,
            ...snap.payload.doc.data() as object
          }
        })
      })
    )
  }

  addContact(addContactModal: addContact) {
    return of(this._angularFirestore.collection(DBCollections.contacts).add(addContactModal))
  }

  delete(id: string) {
    return of(this._angularFirestore.collection(DBCollections.contacts).doc(id).delete())
  }

}

