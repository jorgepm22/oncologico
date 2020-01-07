import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from 'src/models/paciente';

@Injectable()
export class PacienteService {

  constructor(private http: HttpClient) {
  }

  addPaciente(paciente: Paciente) {   
    return this.http.post('http://localhost:3000/api/paciente?paciente='+ JSON.stringify(paciente),null);    
  }

}