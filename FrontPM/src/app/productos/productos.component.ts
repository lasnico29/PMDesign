import { Component, OnInit } from '@angular/core';
import { BackConectionService } from '../back-conection.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {
  
  productos: any[] = [];

  constructor() {}

  ngOnInit() {
    
    //this.sproductos.GetProductos.subscribe((data : any) =>{this.productos = data});
  
    
  }

  
}
