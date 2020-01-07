import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../../models/paciente'
import { PacienteService } from './add-paciente.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {
  paciente : Paciente = new Paciente;
  constructor( private router: Router, private pacienteS: PacienteService, private loginService: LoginService) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/home']);
  }
  cancel(){

  }
  submit(){
    const env = this;
    this.pacienteS.addPaciente(this.paciente).subscribe( 
      res => {
        console.log(res)
        env.navigate();
      },
      error => {
        console.error(error);
      },
    );
  }
}
