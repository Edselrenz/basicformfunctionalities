import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonBadge,
  IonButtons,
  IonBackButton,
  IonMenuButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-system',
  templateUrl: 'system.page.html',
  styleUrls: ['system.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonBadge,
    IonButtons,
    IonBackButton,
    IonMenuButton,
  ],
})
export class SystemPage {
  isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  platformName = 'Modern Browser / Capacitor Engine';

  constructor() {
    addIcons({ checkmarkCircleOutline });
  }
}

