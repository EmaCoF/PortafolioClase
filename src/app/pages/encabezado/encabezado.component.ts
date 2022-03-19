import { Component, OnInit } from '@angular/core';
import { infopaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public _servicio:infopaginaService) { }

  ngOnInit(): void {
  }

}
