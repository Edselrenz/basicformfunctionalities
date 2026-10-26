import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
} from '@ionic/angular';

export interface SubmittedFormData {
  fullName: string;
  email: string;
  gender: string;
  country: string;
  bio: string;
  notifications: boolean;
  agreeToTerms: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    FormsModule,
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
  fullName = '';
  email = '';
  gender = '';
  country = '';
  agreeToTerms = false;
  notifications = true;
  bio = '';
  submitted = false;
  submittedData: SubmittedFormData | null = null;

  onSubmit(): void {
    const trimmedName = this.fullName.trim();
    const trimmedEmail = this.email.trim();
    if (!trimmedName || !trimmedEmail) {
      return;
    }

    this.submittedData = {
      fullName: trimmedName,
      email: trimmedEmail,
      gender: this.gender,
      country: this.country,
      bio: this.bio.trim(),
      notifications: this.notifications,
      agreeToTerms: this.agreeToTerms,
    };
    this.submitted = true;
  }

  onReset(form?: NgForm): void {
    this.fullName = '';
    this.email = '';
    this.gender = '';
    this.country = '';
    this.agreeToTerms = false;
    this.notifications = true;
    this.bio = '';
    this.submitted = false;
    this.submittedData = null;

    form?.resetForm({
      fullName: '',
      email: '',
      gender: '',
      country: '',
      agreeToTerms: false,
      notifications: true,
      bio: '',
    });
  }
}