import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GnomeService } from '../../../Services/gnome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  gnomes: any[] = [];
  term: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _gnomeService: GnomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.term = params['term'];
      // console.log(params['term']);
      this.gnomes = this._gnomeService.searchGnomes(params['term']);
      console.log(this.gnomes);
    });
  }
  searchGnomes(term: string) {
    console.log(term);
    // console.log(this.gnomes.Brastlewark[idx]);
    // console.log(this.gnomes);
    // with Output recived from GnomeCard.component, we get the selectedGnome ID and we pass it to the Router to navigate throught ID
  }
}
