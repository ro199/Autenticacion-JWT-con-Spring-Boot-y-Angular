import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from "../../models/producto";
import { ProductoService } from "../../servicios/producto.service";

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  producto: Producto[] = [];

  constructor(private readonly _productoService: ProductoService,
    private toastr: ToastrService
    ) { }

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

  borrar(id: number) {
    this._productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
