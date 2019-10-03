import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sales.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private  saleservices: SaleService) { }

  personas: Persona[] = [];
  poll: Persona[];
  dat: any[] = [];
  data: Persona[] = [];

  selectControl: FormControl = new FormControl();

  ngOnInit() {
    this.saleservices.getClientes().subscribe(
      (clientes) => {
        console.log('Entraste amigui');
        console.log(JSON.stringify(clientes));
        // tslint:disable-next-line:prefer-const
        let data = {
          // tslint:disable-next-line:object-literal-key-quotes
          'idpersona': clientes[0][0],
          // tslint:disable-next-line:object-literal-key-quotes
          'nombres': clientes[0][1],
          // tslint:disable-next-line:object-literal-key-quotes
          'apellidos': clientes[0][2],
          // tslint:disable-next-line:object-literal-key-quotes
          'dni': clientes[0][3],
          // tslint:disable-next-line:object-literal-key-quotes
          'telefono': clientes[0][4],
        };
        this.dat[0] = data;
        console.log(this.dat);
        this.personas = clientes;
      }
    );
  }

  getid(e) {
    console.log(e);
  }

}
