import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Producto } from '../interfaces/productoInterface';

@Injectable({
    providedIn:'root'
})
export class ProductosService {
    cargando=true;
    producto:Producto[]=[];

    constructor(private http:HttpClient){
        this.cargarproducto()
    }

    private cargarproducto(){
        this.http.get('https://pruebadesarrolloweb-bea11-default-rtdb.firebaseio.com/productosIdx.json')
        .subscribe((resp:Producto[])=>{
        console.log(resp);
        this.producto=resp
        setTimeout(() => {
            this.cargando=true
        }, (2000));
        
        })
    }
}