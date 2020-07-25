import { Component, OnInit } from '@angular/core';
import { GnomeService } from '../../Services/gnome.service';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.scss']
})
export class GnomeDetailComponent implements OnInit {

  public gnomes = [];

  constructor(private _gnomeService: GnomeService) { }

  ngOnInit(): void {
    this._gnomeService.get_gnomesData()
    .subscribe(data => this.gnomes = data);
  }
}
 