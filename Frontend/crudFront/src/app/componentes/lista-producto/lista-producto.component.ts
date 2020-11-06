import { Component, OnInit } from '@angular/core';
import { Producto } from "../../models/producto";
import { ProductoService } from "../../servicios/producto.service";

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  producto: Producto[] = [];

  constructor(private readonly _productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this._productoService.lista()
    .subscribe(
      data => {
        this.producto = data;
      },
      err => {
        console.error(err);
      }
    )
  }

  borrar(id: number){
    alert('Borrar el id ' + id);
  }

}
