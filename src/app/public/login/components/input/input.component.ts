import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatHint } from '@angular/material/form-field';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit  {
  email: FormControl;
  password: FormControl;
  errorMsg : string;
  hide = true;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<InputComponent>,
    private loginService: LoginService
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  login() {
    console.log(this.email.value + ', ' + this.password.value);
    this.loginService
      .getUserbyEmailAndPassword(this.email.value, this.password.value)
      .subscribe(
        (data) => {
          if (data.user_id) {
            // Guardar usuario en el session storage??? y cerrar modal
            sessionStorage.setItem('user', JSON.stringify(data));
            this.dialogRef.close(true);
          }
        },
        (err) => {
          this.handleError(err);
        }
      );
  }

  handleError(error: any) {
    if (error.status === 500) {
      //  Show error message
      this.errorMsg = "El usuario no existe"
    }
  }

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes introducir un email';
    }

    return this.email.hasError('email') ? 'El email no es válido' : '';
  }
  getErrorMessagePas() {
    if (this.password.hasError('required')) {
      return 'Debes introducir la contraseña';
    }

    return this.password.hasError('password') ? 'La contraseña no es válida' : '';
  }
}
