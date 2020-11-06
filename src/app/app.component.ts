import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAppLayoutDemo';

  login() {
    console.log('login clicked....')
  }

  logout() {
    console.log('loged out clicked....')
  }
}

