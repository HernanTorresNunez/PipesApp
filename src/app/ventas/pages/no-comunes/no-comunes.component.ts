import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect Pipe
  nombre: string = 'Hernán';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural Pipe
  clientes: string[] = ['María', 'Pedro', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  cambiarCliente() {
    this.nombre = this.nombre === 'Hernán' ? 'Nicole' : 'Hernán';
    this.genero = this.genero === 'masculino' ? 'femenino' : 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Hernán',
    edad: 23,
    direccion: 'San José, Costa Rica'
  }

  // Json Pipe
  //heroes = {}

  // Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,...

  valorPromesa = new Promise( (resolve, reject) => {
    
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);

  });

}
