import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Husk', 'Thor'];

  borrado: string[] = [];

  heroeBorrado: string= '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    this.borrado.push(this.heroeBorrado);
    
  }

}
