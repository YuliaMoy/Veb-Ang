import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { BoardComponent } from './board/board.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LogoutComponent } from './logout/logout.component';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@NgModule({
  declarations: [
    SidebarMenuComponent,
    UserIconComponent,
    BoardComponent,
    ProjectsComponent,
    SettingsComponent,
    UpgradeComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarMenuComponent
  ]
})
export class SidebarModule { }

