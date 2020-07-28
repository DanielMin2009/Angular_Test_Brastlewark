import { Component, OnInit } from '@angular/core';
import { GnomeService } from '../../Services/gnome.service';
import { ActivatedRoute } from '@angular/router';
import { Gnome } from 'src/app/Models/gnome.model';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.scss'],
})
export class GnomeDetailComponent {
  public gnomes: Gnome[] = [];
  idx: number;
  gnome: any = {};

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.gnomes = [];
  }

  ngOnInit(): void {
    this.gnome = this.activatedRoute.params.subscribe((params) => {
      this.idx = +params['id'];
      // console.log(this.idx);
      this.gnomes = JSON.parse(localStorage.getItem('gnomes'));
      for (let i = 0; i >= this.gnomes.length; i++) {
        this.gnomes.push(this.gnome);
      }
      console.log(JSON.parse(localStorage.getItem('gnomes')));
    });
  }
}
