import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: FormGroup;
loading = false;
  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  ingresar(){
    
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;
    console.log(usuario)
    console.log(contraseña)
    if(usuario == "mati"&& contraseña == "123") {
      // usuario logueado correctamente
      this.fakeloading();
    } else{
      //mostrar mensaje de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o Contraseña erroneos', '',{
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition:'bottom'

    })
  }
  fakeloading(){
    this.loading = true;
    setTimeout(() =>{
      // redireccionar al dashboard
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
