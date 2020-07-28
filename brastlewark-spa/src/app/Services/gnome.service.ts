import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gnome } from '../Models/gnome.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GnomeService {
  gnomes: Gnome[];
  gnome: Gnome;
  private baseUrl: string =
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  constructor(private http: HttpClient) {}

  public get_gnomesData(): Observable<Gnome[]> {
    return this.http.get<Gnome[]>(this.baseUrl);
  }

  getGnome(id: number): Observable<Gnome> {
    return this.get_gnomesData().pipe(
      map((gnomes) => gnomes.find((gnome) => gnome.id == id))
    );
  }
}
