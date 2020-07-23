import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomesListComponent } from './Views/gnomes-list/gnomes-list.component';
import { GnomeDetailComponent } from './Views/gnome-detail/gnome-detail.component';


const routes: Routes = [
  { path: "gnomes-list", component: GnomesListComponent },
  { path: "gnome-detail", component: GnomeDetailComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'gnomes-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
