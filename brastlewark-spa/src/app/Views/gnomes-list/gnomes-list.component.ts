import { Component, OnInit } from '@angular/core';
import { GnomeService } from '../../Services/gnome.service';
import { Gnome } from 'src/app/Models/gnome.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gnomes-list',
  templateUrl: './gnomes-list.component.html',
  styleUrls: ['./gnomes-list.component.scss'],
})
export class GnomesListComponent implements OnInit {
  public gnomes: any;
  public gnome: Gnome;

  constructor(private _gnomeService: GnomeService, private router: Router) {}

  ngOnInit(): void {
    this.getGnomes();
    // this._gnomeService.set(name, 'Hello');
  }

  getGnomes(): void {
    this._gnomeService.get_gnomesData().subscribe(
      (data) => {
        this.gnomes = data;
        localStorage.setItem('gnomes', JSON.stringify(this.gnomes));
        // console.log(this.gnomes);
      },
      (error) => alert('error on load data')
    ); // Insert a Bootstrap Modal
  }

  viewGnome(idx: number) {
    // console.log(idx);
    this.router.navigate(['/gnome', idx]);
    // console.log(this.gnomes.Brastlewark[idx]);
    // console.log(this.gnomes);
    // with Output recived from GnomeCard.component, we get the selectedGnome ID and we pass it to the Router to navigate throught ID
  }
}
