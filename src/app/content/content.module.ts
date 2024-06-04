import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './main-content/header/header.component';
import { LabelsComponent } from './main-content/labels/labels.component';
import { SidebarModule } from "../sidebar/sidebar.module";
import { PercentageBlockComponent } from './main-content/percentage-block/percentage-block.component';

@NgModule({
  declarations: [
    MainContentComponent,
    HeaderComponent,
    LabelsComponent,
    PercentageBlockComponent
  ],
  exports: [
    MainContentComponent,
    HeaderComponent,
    LabelsComponent,
    PercentageBlockComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ]
})
export class ContentModule { }
