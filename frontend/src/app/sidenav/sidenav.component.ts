import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  menu = {
    home : true,
    pacientes: false,
    login : true, 
  } 

  constructor() { }

  ngOnInit() {
  }

  clickSidenav( destino : string ){
    this.restartSidenav();
    switch (destino){
      case 'home':
        this.menu.home = true;
        break;
      case 'pacientes':
        this.menu.pacientes = true;
        break;
    }
    console.log(this.menu)
  }

  restartSidenav(){
    this.menu.home = false;
    this.menu.login = false;
    this.menu.pacientes = false;
  }

}
