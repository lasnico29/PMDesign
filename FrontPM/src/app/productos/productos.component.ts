import { Component, OnInit } from '@angular/core';
import { ServProductosService } from '../serv-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {
  
  public productos: any;

  constructor() {
    this.productos =[
      {
        title: "Titulo1",
        imageUrl: "https://i0.wp.com/www.ntv.com.mx/wp-content/uploads/2019/11/golden-cachorro-e1549967733842-1024x650.jpg?fit=1024%2C650&ssl=1",
        description: 'ajjajaj'
      },
      {
        title: "Titulo1",
        imageUrl: "https://i0.wp.com/www.ntv.com.mx/wp-content/uploads/2019/11/golden-cachorro-e1549967733842-1024x650.jpg?fit=1024%2C650&ssl=1",
        description: 'ajjajaj'
      },
      {
        title: "Titulo1",
        imageUrl: "https://i0.wp.com/www.ntv.com.mx/wp-content/uploads/2019/11/golden-cachorro-e1549967733842-1024x650.jpg?fit=1024%2C650&ssl=1",
        description: 'ajjajaj'
      },
      {
        title: "Titulo1",
        imageUrl: "https://i0.wp.com/www.ntv.com.mx/wp-content/uploads/2019/11/golden-cachorro-e1549967733842-1024x650.jpg?fit=1024%2C650&ssl=1",
        description: 'ajjajaj'
      },
      {
        title: "Titulo1",
        imageUrl: "https://i0.wp.com/www.ntv.com.mx/wp-content/uploads/2019/11/golden-cachorro-e1549967733842-1024x650.jpg?fit=1024%2C650&ssl=1",
        description: 'ajjajaj'
      },
      {
        title: "Titulo1",
        imageUrl: "https://i0.wp.com/www.ntv.com.mx/wp-content/uploads/2019/11/golden-cachorro-e1549967733842-1024x650.jpg?fit=1024%2C650&ssl=1",
        description: 'ajjajaj'
      },
    ] 
}

  ngOnInit() {}

  
}
