import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonToggle,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonToggle,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class Tab1Page {
  fullName: string = '';
  email: string = '';
  gender: string = '';
  country: string = '';
  agreeToTerms: boolean = false;
  notifications: boolean = true;
  bio: string = '';
  submitted: boolean = false;

  constructor() {}

  onSubmit(): void {
    if (!this.fullName.trim() || !this.email.trim()) {
      return;
    }
    this.submitted = true;
  }

  onReset(): void {
    this.fullName = '';
    this.email = '';
    this.gender = '';
    this.country = '';
    this.agreeToTerms = false;
    this.notifications = true;
    this.bio = '';
    this.submitted = false;
  }
}