import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gnome } from 'src/app/Models/gnome.model';
import { of, Observable, from } from 'rxjs';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.scss'],
})
export class GnomeDetailComponent {
  public gnomes: Gnome[] = [];
  public gnome: Gnome;

  constructor(private activatedRoute: ActivatedRoute) {
    this.gnomes = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getGnome(params['id']);
    });
  }

  // getGnome(id: number): Gnome {
  //   this.gnomes = JSON.parse(localStorage.getItem('gnomes'));
  //   console.log('we have them', this.gnomes);
  //   return (this.gnome = this.gnomes.find((gnome) => gnome.id === id));
  // }

  getGnome(id: number): Observable<Gnome> {
    this.gnomes = JSON.parse(localStorage.getItem('gnomes'));
    console.log('we have them', this.gnomes);
    const GNOME = this.gnomes.filter((gnome)=> gnome.id === id);
    return from(GNOME);
  }
}

