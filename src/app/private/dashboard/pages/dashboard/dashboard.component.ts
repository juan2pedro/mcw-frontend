import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Input() usernamePadre:string;
  username:string;

  recibirMensaje(){
      this.username = this.usernamePadre;
  } 

}
