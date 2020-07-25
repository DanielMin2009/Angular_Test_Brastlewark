import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomesListComponent } from './Views/gnomes-list/gnomes-list.component';
import { GnomeDetailComponent } from './Views/gnome-detail/gnome-detail.component';


const routes: Routes = [
  { path: "gnomes", component: GnomesListComponent },
  { path: "gnome/:id", component: GnomeDetailComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'gnomes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
