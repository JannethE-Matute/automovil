import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil } from 'src/app/model/automovil';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{

  constructor(private router:Router, private service:ServiceService){ }

  ngOnInit() {
  }

  Guardar() {
    // Obtener los valores de los campos del formulario
    const placa = (document.getElementById('placa') as HTMLInputElement).value;
    const marca = (document.getElementById('marca') as HTMLInputElement).value;
    const modelo = (document.getElementById('modelo') as HTMLInputElement).value;
    const color = (document.getElementById('color') as HTMLInputElement).value;
    const precio = (document.getElementById('precio') as HTMLInputElement).value;

    // Crear el objeto automovil con los valores obtenidos
    const automovil = {
      placa: placa,
      marca: marca,
      modelo: modelo,
      color: color,
      precio: precio
    };

    // Llamar al método para guardar el automóvil
    this.service.createAutomovil(automovil)
      .subscribe(data => {
        alert("Se agregó con éxito");
        this.router.navigate(["listar"]);
      });
  }
}

