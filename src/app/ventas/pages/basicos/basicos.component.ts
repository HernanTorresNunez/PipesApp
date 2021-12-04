import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'hernán';
  nombreUpper: string = 'HERNÁN';
  nombreCompleto: string = 'hErNán tORreS';

  fecha: Date = new Date(); // el día de hoy

}
