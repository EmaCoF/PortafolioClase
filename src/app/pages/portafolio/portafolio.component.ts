import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/Productos.servico';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public ProductosService:ProductosService) { }

  ngOnInit(): void {
  }

}
