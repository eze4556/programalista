import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FirestoreService } from '../common/services/firestore.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  selector: 'app-add-price-list',
  templateUrl: './add-price-list.page.html',
  styleUrls: ['./add-price-list.page.scss'],
})
export class AddPriceListPage {
  priceList = {
    nombreComercio: '',
    nombreLista: '',
    productos: [
      { nombreProducto: '', descripcionProducto: '', precioProducto: 0 }
    ]
  };

  constructor(private firestoreService: FirestoreService) {}

  addProduct() {
    this.priceList.productos.push({ nombreProducto: '', descripcionProducto: '', precioProducto: 0 });
  }

  removeProduct(index: number) {
    this.priceList.productos.splice(index, 1);
  }

  savePriceList() {
    this.firestoreService.createPriceList(this.priceList).then(() => {
      console.log('Lista guardada exitosamente');
    });
  }
}
