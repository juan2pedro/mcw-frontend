import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }
  private createMyForm(): FormGroup {
      return this.fb.group({
        email: [],
        password: []
      })
    }
public submitForm(){
  alert("Enviar formulario")
  console.log(this.myForm.value)
}
}

