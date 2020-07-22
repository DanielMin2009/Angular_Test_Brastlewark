import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gnome } from '../Models/gnome.model';

@Injectable({
  providedIn: 'root',
})
export class GnomeService {
  baseUrl =
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
  constructor(private http: HttpClient) {}
  //get gnomes data
  public get_gnomesData() {
    // return this.http.get(this.baseUrl+'/postman-url/');
    return this.http.get(this.baseUrl);
  }
}
