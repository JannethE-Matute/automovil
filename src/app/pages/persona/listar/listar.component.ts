import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/model/automovil';
import { Router } from '@angular/router';
import { ServiceService } from '../../../services/service.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  automoviles?:Automovil[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getAutomoviles()
    .subscribe(data=>{
      this.automoviles=data;
    })
    
  }

}
