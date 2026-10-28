import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonTextarea,
  IonBadge,
  IonIcon,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { school, flag, eye, ribbon, star } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonTextarea,
    IonBadge,
    IonIcon,
    IonButtons,
    IonMenuButton,
  ],
})
export class Tab2Page {
  public displayedContent: string = '';
  public activeCategory: string = '';

  constructor() {
    addIcons({ school, flag, eye, ribbon, star });
  }

  public showContent(type: string): void {
    this.activeCategory = type;
    switch (type) {
      case 'mission':
        this.displayedContent =
          'Our mission is to provide an excellent learning environment for all our students.';
        break;
      case 'vision':
        this.displayedContent =
          'Our vision is to become the leading university in our region, fostering innovation and leadership.';
        break;
      case 'tagline':
        this.displayedContent = 'Your Future, Our Commitment.';
        break;
      case 'coreValues':
        this.displayedContent =
          'Our core values are: \n\n1. Integrity\n2. Excellence\n3. Collaboration\n4. Compassion';
        break;
      default:
        this.displayedContent = 'Content not found.';
    }
  }

  public getCategoryLabel(): string {
    switch (this.activeCategory) {
      case 'mission':
        return 'University Mission Statement';
      case 'vision':
        return 'Institutional Vision';
      case 'tagline':
        return 'Official University Tagline';
      case 'coreValues':
        return 'Core Institutional Values';
      default:
        return 'Select a Statement';
    }
  }
}
