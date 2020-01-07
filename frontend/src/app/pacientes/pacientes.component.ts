import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteListaService } from './paciente.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  constructor(private router: Router, private lista: PacienteListaService) { }

  ngOnInit() {
    const env = this;
    this.lista.get().subscribe( 
      res => {
        console.log(res)  
      },
      error => {
        console.error(error);
      },
    );
  }

  addPaciente() {
    this.navigate();
  }
  
  onSubmit() {
    console.log("HEOL")
  }

  navigate() {
    this.router.navigate(['/addPaciente']);
  }
}
