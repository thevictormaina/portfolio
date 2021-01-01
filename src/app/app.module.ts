import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectComponent,
    HomeComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
