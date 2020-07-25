import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Gnome } from '../Models/gnome.model';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';



@Injectable({
  providedIn: 'root',
})
export class GnomeService {
  private baseUrl: string =
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  constructor(private http: HttpClient) {
  }
  public get_gnomesData(): Observable<Gnome[]> {
    return this.http.get<Gnome[]>(this.baseUrl)
  }
}
