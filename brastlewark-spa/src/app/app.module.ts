import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { GnomesListComponent } from './Views/gnomes-list/gnomes-list.component';
import { GnomeDetailComponent } from './Views/gnome-detail/gnome-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GnomesListComponent,
    GnomeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
