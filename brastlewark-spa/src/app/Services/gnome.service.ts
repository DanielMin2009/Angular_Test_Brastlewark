import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gnome } from '../Models/gnome.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GnomeService {
  private baseUrl: string =
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  constructor(private http: HttpClient) {}
  // HttpClient API get() method => Fetch gnome
  public get_gnomesData(): Observable<Gnome[]> {
    return this.http.get<Gnome[]>(this.baseUrl);
  }

  // get_gnomeById(id): Observable<Gnome[]> {
  //   return this.http.get<Gnome[]>(this.baseUrl + id);
  // }
}
