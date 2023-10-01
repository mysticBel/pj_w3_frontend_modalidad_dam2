import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { Deporte } from '../models/deporte.model';
import { Observable } from 'rxjs';

// el endpoint donde esta el endpoint util para el combo de deporte
const url = AppSettings.API_ENDPOINT+ '/util'

@Injectable({
  providedIn: 'root'
})
export class DeporteService {

  //constructor creado para la clase Service
  constructor(private http:HttpClient) { }

  // accedemos al servicio
  listaDeporte(): Observable<Deporte[]>{
    // trae un JSON
    //es un casteo de arrays porque en el backend 
    ///es una lista de deportes
    return this.http.get<Deporte[]>(url+"/deporte"); 

  }

}
