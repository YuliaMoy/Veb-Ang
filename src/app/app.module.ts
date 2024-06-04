import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentModule } from './content/content.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { DataViewerModule } from './data-viewer/data-viewer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, SidebarModule, ContentModule, DataViewerModule, HttpClient],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-angular-project';
    activeProjects = false;
    messenger = false;

    setActiveProjects() {
        this.activeProjects = true;
        this.messenger = false;
    }

    setMessenger() {
        this.activeProjects = false;
        this.messenger = true;
    }
}


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClient
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
