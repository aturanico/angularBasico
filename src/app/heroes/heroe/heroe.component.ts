import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styles: [``]
})

export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    getNombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return this.nombre + ' - ' + this.edad;
    }

    cambiarHeroe(): void {
       this.nombre = "Spiderman"     
    }

    cambiarEdad(): void{
        this.edad = 30
    }


}