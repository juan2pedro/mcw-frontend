import { AppComponent } from './../../../../app.component';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  onClickMe() {
      let nombreUsuario : string = 'Juanpe';
  
      sessionStorage.setItem("nombreUsuario", nombreUsuario);
    
  }
  private route: ActivatedRoute;
  
}

