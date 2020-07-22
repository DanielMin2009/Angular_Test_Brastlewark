import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  baseUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
  constructor(private http: HttpClient) { }
    //get gnomes data
    public get_gnomesData () {
      // return this.http.get(this.baseUrl+'/postman-url/');
      return this.http.get(this.baseUrl);
    }
  title = 'brastlewark';
}
