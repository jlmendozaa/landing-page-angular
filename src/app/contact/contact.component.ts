import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formularioContacto: FormGroup
  usuarioActivo?: any = {
    nombre: 'pedro',
    apellido: '',
    dni: 'asdasdasd'
  }

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      dni: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('apellido')?.clearValidators()
    this.formularioContacto.get('apellido')?.updateValueAndValidity()

    this.formularioContacto.patchValue({
      name: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni
    })
    this.formularioContacto.get('name')?.disable()
    this.formularioContacto.get('apellido')?.disable()
    this.formularioContacto.get('dni')?.disable()
  }

  enviar(){
    console.log(this.formularioContacto.value.name);
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) &&
    this.formularioContacto.get(controlName)?.touched
  }

}
