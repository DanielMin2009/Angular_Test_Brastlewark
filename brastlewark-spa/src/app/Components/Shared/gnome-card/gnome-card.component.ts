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
    //como este componente está dentro de un componente padre, tiene que emitir el evento click, pasandole el id del selectedGnome al componente padre para que pueda navegar a su url con el gnomeId que le estamos pasando como parámetro (Output)
    this.selectedGnome.emit(gnomeId);
  }

}
