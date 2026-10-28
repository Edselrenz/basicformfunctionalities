import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  personOutline,
  settingsOutline,
  hardwareChipOutline,
  gridOutline,
  archiveOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonMenuToggle,
  ],
})
export class AppComponent {
  constructor() {
    addIcons({
      homeOutline,
      personOutline,
      settingsOutline,
      hardwareChipOutline,
      gridOutline,
      archiveOutline,
      shieldCheckmarkOutline,
    });
  }
}
