import { Component, OnInit, Input } from '@angular/core';
import { producto } from '../model/producto';
import { SaleService } from '../sales.service';
import { DetalleVenta } from '../model/detalleventa';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() products: producto[];
  @Input() total: number;
  @Input() qttotal: number;
  idPersona: Persona;
  idcliente: Persona;
  res: DetalleVenta;

  state: boolean;
  // tslint:disable-next-line:ban-types
  data: Object;

  constructor(private saleService: SaleService) { }



  ngOnInit() {
    this.state = false;
  }
  Venta() {
      const date = new Date();
      console.log(this.products);
      this.idcliente = this.saleService.getClient();
      this.idPersona = this.idcliente;

      this.saleService.hacerventa(date , this.idPersona, this.idcliente).subscribe(resi => {
        console.log(resi);
        this.saleService.saleDetails( resi, this.products, this.total, this.qttotal).subscribe(ress => {
        console.log(ress);
        alert('Vendido');
      });
    });
      alert('Vendido Amiguito');
  }

}
