export interface Producto {
  nombreProducto: string;
  descripcionProducto: string;
  precioProducto: number;
}

export interface ListaDePrecios {
  id: string;
  nombreComercio: string;
  nombreLista: string;
  productos: Producto[];
}
