import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    LoginComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    LoginComponent,
    InputComponent,
    ButtonComponent
  ]
})
export class LoginModule { }
