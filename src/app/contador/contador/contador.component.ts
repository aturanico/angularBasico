import {Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h2>{{ titulo }}</h2>
    
    <button (click)="sumar()">+5</button>
    {{ numero }}
    <button (click)="restar()">-5</button>
    `,
    styles: [``]
})

export class ContadorComponent {
    titulo: string = "Contador";
    numero: number = 0;
    valor: number = 5
  
    sumar(): number{
      return this.numero +=this.valor;
    }
  
    restar(): number{
      return this.numero -=this.valor;
    }
}