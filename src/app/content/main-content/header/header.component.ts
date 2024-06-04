import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showUsers = false;
  users: User[] = [
    { id: 1, name: 'Chris E.', photoUrl: 'img/bred.jpg' },
    { id: 2, name: 'Mark P.', photoUrl: 'img/robert1.jpg' },
    { id: 3, name: 'Sebastian K.', photoUrl: 'img/chris.jpg' }
  ];

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }

  changeColor(buttonType: string, isActive: boolean) {
    const button = document.querySelector(`.button-${buttonType}`);
    if (button) {
      if (isActive) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    }
  }
}
