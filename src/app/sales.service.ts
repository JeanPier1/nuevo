import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { producto } from './model/producto';
import { map, catchError } from 'rxjs/operators';
import { Venta } from './model/ventas';
import { DetalleVenta } from './model/detalleventa';
import { Persona } from './model/persona';


@Injectable({
    providedIn: 'root'
  })
export class SaleService {

  //  api = 'https://examen-el-gonza.herokuapp.com/';
      api = 'https://peaceful-beach-82242.herokuapp.com';
    client: Persona;

    constructor(private http: HttpClient) {

    }
    getClienteBydni(dni: string): Observable<Persona> {
        return this.http.get<Persona>(this.api + '/nu/' + dni);
    }

    getClienteByCodigo(code: string): Observable<producto> {
        return this.http.get<producto>(this.api + '/pro/' + code);
    }
    getClientes(): Observable<Persona[]> {
        return this.http.get<Persona[]>(this.api + '/persona/listar');
    }


    hacerventa(fechas: Date, user: Persona, client: Persona): Observable<Venta> {
        // tslint:disable-next-line:prefer-const
        let data = {
            idpersona: user.idpersona,
            idcliente: client.idpersona
        };
        console.log(data);
        return this.http.post<Venta>(this.api + '/venta/' , data);
    }

    saleDetails(venti: Venta, pproducto: producto[], preci: number, qt: number): Observable<DetalleVenta> {
        console.log(preci);
        console.log(qt);
        console.log(venti);
        console.log(pproducto[0].idproducto);
                // tslint:disable-next-li. ne:prefer-const
        const data = {
            cantidad: qt,
            precio: preci,
            idproducto: pproducto[0].idproducto,
            idventas: venti
        };

        return this.http.post<DetalleVenta>(this.api + '/venta/detalle' , data);
    }

    getClient(client?: Persona): Persona {
        if (client) {
        this.client = client;
        } else {
            return this.client;
        }
    }
}
