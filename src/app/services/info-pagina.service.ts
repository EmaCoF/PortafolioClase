import {Injectable} from "@angular/core";
import {infopagina } from '../interfaces/info-pagina.interfase';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class infopaginaService{
    info:infopagina={};
    cargada=false;
    equipo: any=[];

    constructor(private http:HttpClient){
        this.cargarinfo();
        this.cargarequipo();
    }
    cargarinfo(){
        this.http.get('assets\\data\\dataPagina.json')
        .subscribe((resp:infopagina)=>{
            this.cargada=true;
            this.info=resp;
            console.log(resp);
        });
    }
    cargarequipo(){
        this.http.get('https://pruebadesarrolloweb-bea11-default-rtdb.firebaseio.com/equipo.json')
        .subscribe( (resp) =>{
            this.cargada=true;
            this.equipo=resp;
            console.log(resp);
        });
    }
}

