import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gnome } from 'src/app/Models/gnome.model';


@Component({
  selector: 'app-gnome-card',
  templateUrl: './gnome-card.component.html',
  styleUrls: ['./gnome-card.component.scss']
})
export class GnomeCardComponent implements OnInit {

  @Input() gnome: Gnome;
  @Output() selectedGnome: EventEmitter<number>;

  constructor() {
    this.selectedGnome = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.gnome, 'card');
  }

  viewGnome(gnomeId) {
    // This component is inside a parent component and it has to emit the click event, passing him the selectedGnome id to the father component. It makes possible to navigate to it's url with gnomeId as a parameter (Output) 
    this.selectedGnome.emit(gnomeId);
  }

}
