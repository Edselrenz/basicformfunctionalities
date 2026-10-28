import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  IonButton,
  IonButtons,
  IonBackButton,
  IonMenuButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  moonOutline,
  textOutline,
  notificationsOutline,
  trashOutline,
  archiveOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonToggle,
    IonButton,
    IonButtons,
    IonBackButton,
    IonMenuButton,
  ],
})
export class SettingsPage {
  isDarkMode = false;
  isCompactDensity = false;
  notificationsEnabled = true;
  cacheCleared = false;

  constructor() {
    addIcons({
      moonOutline,
      textOutline,
      notificationsOutline,
      trashOutline,
      archiveOutline,
      shieldCheckmarkOutline,
    });
  }

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('ion-palette-dark', this.isDarkMode);
  }

  clearCache(): void {
    this.cacheCleared = true;
    setTimeout(() => {
      this.cacheCleared = false;
    }, 3000);
  }
}

