export class DetalleVenta {
    ventas: {
        idventa: number;
    };
    producto: {
            idproducto: number;
            // tslint:disable-next-line:variable-name
            nomb_precio: string;
            precio: number;
            stock: number;
            codigo: number;
            qt: number;
        };
    precio: number;
    cantidad: number;
}
