import { Component } from '@angular/core';
import { IonHeader,IonCardContent, IonCardHeader, IonCardTitle, IonToolbar, IonText, IonTitle, IonContent, IonLabel, IonList, IonItem, IonCard, IonInput, IonSpinner, IonButtons, IonButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { UserI } from '../common/models/users.models';
import { FirestoreService } from '../common/services/firestore.service';
import { FormsModule } from '@angular/forms';
import { IoniconsModule } from '../common/modules/ionicons.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonList,IonCardContent, IonLabel,IonCardHeader,IonText,IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput,
    IonIcon, IonButton, IonButtons, IonSpinner, IonInput, IonCard,
    FormsModule,
    IoniconsModule
  ],
})
export class HomePage {
  constructor(private router: Router) {}








   goToAddPriceList() {
    this.router.navigate(['/add-price-list']);
  }

  goToViewPriceLists() {
    this.router.navigate(['/view-price-lists']);
  }



}

