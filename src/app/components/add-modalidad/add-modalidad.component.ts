import { Component } from '@angular/core';
import { Deporte } from 'src/app/models/deporte.model';
import { Modalidad } from 'src/app/models/modalidad.model';
import { DeporteService } from 'src/app/services/deporte.service';
import { ModalidadService } from 'src/app/services/modalidad.service';

@Component({
  selector: 'app-add-modalidad',
  templateUrl: './add-modalidad.component.html',
  styleUrls: ['./add-modalidad.component.css']
})
export class AddModalidadComponent {
 // Creamos un arreglo vacio para inicializarlo
  lstDeporte : Deporte[] = [];

   // para post : Inicializamos un objjeto modalidad
   objModalidad: Modalidad = {
      nombre :  "",
      numHombres : 0,
      numMujeres : 0,
      edadMaxima : 0,
      edadMinima : 0,
      sede :  "",
      deporte:{
         idDeporte:-1,
      } 
   };

  //agregamos constructor para el Service
   constructor(private deporteService: DeporteService , private modalidadService: ModalidadService){

      this.deporteService.listaDeporte().subscribe(
          data => this.lstDeporte = data
      );
   }

   // agregamos un metodo para el POST de insertaModalidad
   // le pasamos el objeto modalidad 
   iserta(){
      this.modalidadService.registraModalidad(this.objModalidad).subscribe(
            x => alert(x)
      );
   }
}
