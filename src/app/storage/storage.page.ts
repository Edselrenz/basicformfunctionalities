import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  saveOutline,
  eyeOutline,
  trashOutline,
  archiveOutline,
  shieldCheckmarkOutline,
  checkmarkCircleOutline,
  informationCircleOutline,
} from 'ionicons/icons';

export const STORAGE_KEY_AGE = 'user_age';
export const STORAGE_KEY_COLOR = 'user_favorite_color';
export const STORAGE_KEY_TIMESTAMP = 'user_storage_timestamp';

@Component({
  selector: 'app-storage',
  templateUrl: 'storage.page.html',
  styleUrls: ['storage.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton,
    IonMenuButton,
    IonIcon,
  ],
})
export class StoragePage {
  inputAge: number | null = null;
  inputColor = '';

  displayedAge: number | null = null;
  displayedColor: string | null = null;
  retrievedTimestamp = '';
  isDataDisplayed = false;

  feedbackMessage = '';
  feedbackType: 'success' | 'danger' | 'info' = 'info';

  colorPresets = [
    { name: 'Navy Blue', value: '#1e3a8a' },
    { name: 'Emerald', value: '#059669' },
    { name: 'Crimson', value: '#dc2626' },
    { name: 'Coral', value: '#ea580c' },
    { name: 'Amber', value: '#d97706' },
    { name: 'Indigo', value: '#4f46e5' },
    { name: 'Teal', value: '#0d9488' },
  ];

  constructor() {
    addIcons({
      saveOutline,
      eyeOutline,
      trashOutline,
      archiveOutline,
      shieldCheckmarkOutline,
      checkmarkCircleOutline,
      informationCircleOutline,
    });
  }

  selectPresetColor(color: string): void {
    this.inputColor = color;
  }

  saveToLocalStorage(): void {
    const ageVal = this.inputAge;
    const colorVal = this.inputColor.trim();

    if (ageVal === null && !colorVal) {
      this.setFeedback('Please enter an age or favorite color before saving.', 'info');
      return;
    }

    if (ageVal !== null) {
      if (isNaN(ageVal) || ageVal < 1 || ageVal > 120) {
        this.setFeedback('Please enter a valid age between 1 and 120.', 'danger');
        return;
      }
      localStorage.setItem(STORAGE_KEY_AGE, ageVal.toString());
    }

    if (colorVal) {
      localStorage.setItem(STORAGE_KEY_COLOR, colorVal);
    }

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    localStorage.setItem(STORAGE_KEY_TIMESTAMP, timestamp);

    this.setFeedback('Values successfully saved to Preferences Vault.', 'success');
  }

  displayFromLocalStorage(): void {
    const rawAge = localStorage.getItem(STORAGE_KEY_AGE);
    const rawColor = localStorage.getItem(STORAGE_KEY_COLOR);
    const rawTimestamp = localStorage.getItem(STORAGE_KEY_TIMESTAMP);

    if (rawAge === null && rawColor === null) {
      this.isDataDisplayed = false;
      this.displayedAge = null;
      this.displayedColor = null;
      this.setFeedback('No saved values found in Preferences Vault.', 'info');
      return;
    }

    this.displayedAge = rawAge !== null ? parseInt(rawAge, 10) : null;
    this.displayedColor = rawColor;
    this.retrievedTimestamp = rawTimestamp ? `Saved at ${rawTimestamp}` : 'Retrieved from vault';
    this.isDataDisplayed = true;

    this.setFeedback('Stored record retrieved from Preferences Vault.', 'success');
  }

  clearLocalStorage(): void {
    localStorage.removeItem(STORAGE_KEY_AGE);
    localStorage.removeItem(STORAGE_KEY_COLOR);
    localStorage.removeItem(STORAGE_KEY_TIMESTAMP);

    this.displayedAge = null;
    this.displayedColor = null;
    this.retrievedTimestamp = '';
    this.isDataDisplayed = false;

    this.setFeedback('Preferences have been removed from the vault.', 'danger');
  }

  private setFeedback(msg: string, type: 'success' | 'danger' | 'info'): void {
    this.feedbackMessage = msg;
    this.feedbackType = type;
  }
}

