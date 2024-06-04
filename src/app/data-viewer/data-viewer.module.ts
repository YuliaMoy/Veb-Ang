import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewerComponent } from './data-viewer.component';


@NgModule({
    declarations: [
        DataViewerComponent
    ],
    exports: [
        DataViewerComponent
    ],
    imports: [
        CommonModule,
        DataViewerComponent
    ]
})
export class DataViewerModule { }
