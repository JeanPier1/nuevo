import { Component, OnInit, Input } from '@angular/core';
import { SaleService } from '../sales.service';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() client: Persona;

  idcliente: number;
  dat: any[] = [];
  data: Persona[];
  constructor(private salesService: SaleService) { }

  ngOnInit() {
  }
  getCliente(e) {
    if (e.length === 8) {
      // tslint:disable-next-line:prefer-const
      let dni = e;
      this.salesService.getClienteBydni(dni).subscribe(res => {
        console.log(res);

        // tslint:disable-next-line:prefer-const
        let data = {
          // tslint:disable-next-line:object-literal-key-quotes
          'idpersona': res[0],
          // tslint:disable-next-line:object-literal-key-quotes
          'nombres': res[1],
          // tslint:disable-next-line:object-literal-key-quotes
          'apellidos': res[2],
          // tslint:disable-next-line:object-literal-key-quotes
          'dni': res[3],
          // tslint:disable-next-line:object-literal-key-quotes
          'telefono': res[4],
        };
        this.dat[0] = data;
        console.log(this.dat);
        this.client = data;

        this.salesService.getClient(data);
      });

    }
  }


}
