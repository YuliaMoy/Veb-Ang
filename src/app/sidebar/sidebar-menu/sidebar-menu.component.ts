import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {
  activeItem: string = 'board';
  menuItems = [
    { name: 'board' },
    { name: 'projects' },
    { name: 'settings' },
    { name: 'upgrade' },
    { name: 'logout' }
  ];

  setActive(item: string) {
    this.activeItem = item;
  }
}

