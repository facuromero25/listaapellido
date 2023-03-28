import { Component } from '@angular/core';
import { alumno } from 'src/app/models/almuno';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  public Personas:alumno[] = [
    new alumno(1,'Facundo','Romero',true),
    new alumno(2,'Victoria','Andreano',false),
    new alumno(3,'Lucas','Quinteros',false),
    new alumno(4,'Sofia','Puertoluque',true)
  ]
}
