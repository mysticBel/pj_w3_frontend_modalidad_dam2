import { Component } from '@angular/core';
import { Deporte } from 'src/app/models/deporte.model';
import { DeporteService } from 'src/app/services/deporte.service';

@Component({
  selector: 'app-add-modalidad',
  templateUrl: './add-modalidad.component.html',
  styleUrls: ['./add-modalidad.component.css']
})
export class AddModalidadComponent {
 // Creamos un arreglo vacio para inicializarlo
  lstDeporte : Deporte[] = [];

  //agregamos constructor para el Service
   constructor(private deporteService: DeporteService){

      this.deporteService.listaDeporte().subscribe(
          data => this.lstDeporte = data
      );
   }
}
