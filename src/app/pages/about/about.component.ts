import { Component, OnInit } from '@angular/core';
import { infopaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _servicio: infopaginaService) { }

  ngOnInit(): void {
  }

}
