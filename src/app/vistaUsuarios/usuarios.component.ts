import { Component,Input,OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Cliente, Grupo } from './../modeloUsuarios';
import { ServiciosUsuarios } from './../ServiciosUsuarios';




@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: []
})
export class UsuariosComponent implements OnInit {

  cliente: Cliente;
  grupos: Grupo[];
  clientes: Cliente[];

  constructor(private clientesService: ServiciosUsuarios) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
    this.clientes = this.clientesService.getClientes();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }
}

