import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FirestoreService } from '../common/services/firestore.service';
import { jsPDF } from 'jspdf';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [CommonModule, IonicModule,FormsModule],
  selector: 'app-view-price-lists',
  templateUrl: './view-price-lists.page.html',
  styleUrls: ['./view-price-lists.page.scss'],
})
export class ViewPriceListsPage {
  listasDePrecios: any[] = [];
    listaEnEdicion: any | null = null; // Lista que se está editando
  listaEditada: any | null = null; // Copia editable de la lista

  constructor(private firestoreService: FirestoreService) {
    this.firestoreService.getPriceLists().subscribe((listas) => {
      this.listasDePrecios = listas;
    });
  }

  exportToPDF(lista: any) {
    const doc = new jsPDF();
    doc.text(`Lista de Precios: ${lista.nombreLista}`, 10, 10);
    doc.text(`Comercio: ${lista.nombreComercio}`, 10, 20);

    let y = 30;
    lista.productos.forEach((producto: any, index: number) => {
      doc.text(`${index + 1}. ${producto.nombreProducto}`, 10, y);
      doc.text(`Descripción: ${producto.descripcionProducto}`, 10, y + 10);
      doc.text(`Precio: $${producto.precioProducto.toFixed(2)}`, 10, y + 20);
      y += 30;
    });

    doc.save(`${lista.nombreLista}.pdf`);
  }

iniciarEdicion(lista: any) {
    this.listaEnEdicion = lista;
    this.listaEditada = { ...lista, productos: [...lista.productos] }; // Hacer una copia para editar
  }

  guardarCambios() {
    if (this.listaEditada) {
      this.firestoreService
        .updatePriceList(this.listaEditada.id, this.listaEditada)
        .then(() => {
          console.log('Lista actualizada exitosamente');
          this.listaEnEdicion = null;
          this.listaEditada = null;
        })
        .catch((error) => {
          console.error('Error al actualizar la lista:', error);
        });
    }
  }

  cancelarEdicion() {
    this.listaEnEdicion = null;
    this.listaEditada = null;
  }

  agregarProducto() {
    if (this.listaEditada) {
      this.listaEditada.productos.push({
        nombreProducto: '',
        descripcionProducto: '',
        precioProducto: 0,
      });
    }
  }

  eliminarProducto(index: number) {
    if (this.listaEditada) {
      this.listaEditada.productos.splice(index, 1);
    }
  }


// Nueva función para eliminar la lista de precios
  eliminarLista(id: string) {
    this.firestoreService.deletePriceList(id)
      .then(() => {
        console.log('Lista eliminada exitosamente');
      })
      .catch((error) => {
        console.error('Error al eliminar la lista:', error);
      });
  }




}
