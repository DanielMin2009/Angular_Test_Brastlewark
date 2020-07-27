import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
// Routs
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Services
import {GnomeService} from './Services/gnome.service';
// Models
import { Gnome } from "./Models/gnome.model";
// Components
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { GnomesListComponent } from './Views/gnomes-list/gnomes-list.component';
import { GnomeDetailComponent } from './Views/gnome-detail/gnome-detail.component';
import { SearchComponent } from './Components/Shared/search/search.component';
import { GnomeCardComponent } from './Components/Shared/gnome-card/gnome-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GnomesListComponent,
    GnomeDetailComponent,
    SearchComponent,
    GnomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    GnomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
