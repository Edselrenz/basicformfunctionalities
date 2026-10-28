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
  IonLabel,
  IonButton,
  IonIcon,
  IonInput,
  IonModal,
  IonButtons,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonSearchbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  add,
  cart,
  school,
  checkmarkCircle,
  close,
  search,
  basket,
  person,
} from 'ionicons/icons';

export interface Student {
  id: number;
  name: string;
  grade: number;
}

export interface GroceryItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  weight: string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonInput,
    IonModal,
    IonButtons,
    IonMenuButton,
    IonSegment,
    IonSegmentButton,
    IonSearchbar,
  ],
})
export class Tab4Page {
  activeView: 'all' | 'groceries' | 'students' = 'all';
  searchQuery = '';

  // Modal & Form state for new grocery item
  isModalOpen = false;
  newItemName = '';
  newItemPrice: number | null = null;
  newItemQuantity: number | null = null;
  newItemWeight = '';
  errorMessage = '';

  // 1. Student List
  students: Student[] = [
    { id: 1, name: 'Juan Dela Cruz', grade: 94 },
    { id: 2, name: 'Maria Santos', grade: 89 },
    { id: 3, name: 'Mark Angelo Reyes', grade: 76 },
    { id: 4, name: 'Angela Mae Garcia', grade: 96 },
    { id: 5, name: 'Carlos Mendoza', grade: 84 },
    { id: 6, name: 'Sofia Nicole Bautista', grade: 91 },
    { id: 7, name: 'John Paul Ramos', grade: 74 },
    { id: 8, name: 'Bea Kristina Alonzo', grade: 88 },
    { id: 9, name: 'Daniel Padilla', grade: 82 },
    { id: 10, name: 'Kathryn Bernardo', grade: 95 },
  ];

  // 2. Grocery List (at least 20 items with price, quantity, weight)
  groceries: GroceryItem[] = [
    { id: 1, name: 'White Rice (Sinandomeng)', price: 52, quantity: 10, weight: '5 kg' },
    { id: 2, name: 'Fresh Farm Eggs', price: 190, quantity: 24, weight: '1.2 kg' },
    { id: 3, name: 'Whole Cow Milk', price: 98, quantity: 6, weight: '1 L' },
    { id: 4, name: 'Sliced Loaf Bread', price: 65, quantity: 8, weight: '450 g' },
    { id: 5, name: 'Chicken Breast Fillet', price: 230, quantity: 5, weight: '1 kg' },
    { id: 6, name: 'Lean Ground Pork', price: 250, quantity: 4, weight: '1 kg' },
    { id: 7, name: 'Cavendish Bananas', price: 75, quantity: 12, weight: '1.5 kg' },
    { id: 8, name: 'Crisp Fuji Apples', price: 130, quantity: 8, weight: '1 kg' },
    { id: 9, name: 'Red Onions', price: 85, quantity: 15, weight: '1 kg' },
    { id: 10, name: 'Fresh Garlic Bulbs', price: 70, quantity: 10, weight: '500 g' },
    { id: 11, name: 'Native Red Tomatoes', price: 55, quantity: 14, weight: '1 kg' },
    { id: 12, name: 'Russet Baking Potatoes', price: 110, quantity: 7, weight: '2 kg' },
    { id: 13, name: 'Cheddar Cheese Block', price: 145, quantity: 3, weight: '250 g' },
    { id: 14, name: 'Rolled Oats Container', price: 125, quantity: 4, weight: '800 g' },
    { id: 15, name: 'Canola Cooking Oil', price: 150, quantity: 5, weight: '1 L' },
    { id: 16, name: 'Refined White Sugar', price: 68, quantity: 6, weight: '1 kg' },
    { id: 17, name: 'Iodized Fine Salt', price: 22, quantity: 8, weight: '500 g' },
    { id: 18, name: 'Ground Roasted Coffee', price: 210, quantity: 3, weight: '300 g' },
    { id: 19, name: 'Organic Green Tea Bags', price: 115, quantity: 4, weight: '150 g' },
    { id: 20, name: 'Dark Chocolate Bar', price: 160, quantity: 5, weight: '200 g' },
    { id: 21, name: 'Spaghetti Pasta', price: 85, quantity: 6, weight: '500 g' },
    { id: 22, name: 'Sweet Style Tomato Sauce', price: 48, quantity: 9, weight: '250 g' },
  ];

  constructor() {
    addIcons({
      add,
      cart,
      school,
      checkmarkCircle,
      close,
      search,
      basket,
      person,
    });
  }

  get filteredGroceries(): GroceryItem[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return this.groceries;
    return this.groceries.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.weight.toLowerCase().includes(q)
    );
  }

  get totalInventoryUnits(): number {
    return this.groceries.reduce((sum, item) => sum + item.quantity, 0);
  }

  get classAverageGrade(): string {
    if (this.students.length === 0) return '0.0';
    const sum = this.students.reduce((acc, s) => acc + s.grade, 0);
    return (sum / this.students.length).toFixed(1);
  }

  get passingRate(): string {
    if (this.students.length === 0) return '0%';
    const passed = this.students.filter((s) => s.grade >= 75).length;
    return `${Math.round((passed / this.students.length) * 100)}%`;
  }

  getGradeColor(grade: number): string {
    if (grade >= 90) return 'success';
    if (grade >= 75) return 'primary';
    return 'danger';
  }

  getGradeRemark(grade: number): string {
    if (grade >= 90) return 'Outstanding';
    if (grade >= 80) return 'Very Satisfactory';
    if (grade >= 75) return 'Passed';
    return 'Failed';
  }

  openAddModal(): void {
    this.errorMessage = '';
    this.isModalOpen = true;
  }

  closeAddModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }

  addGroceryItem(): void {
    const name = this.newItemName.trim();
    const weight = this.newItemWeight.trim();
    const price = Number(this.newItemPrice);
    const quantity = Number(this.newItemQuantity);

    if (!name || !weight || isNaN(price) || isNaN(quantity)) {
      this.errorMessage = 'Please fill in all fields with valid information.';
      return;
    }

    if (price <= 0 || quantity <= 0) {
      this.errorMessage = 'Price and quantity must be greater than zero.';
      return;
    }

    const nextId =
      this.groceries.length > 0
        ? Math.max(...this.groceries.map((g) => g.id)) + 1
        : 1;

    const newItem: GroceryItem = {
      id: nextId,
      name,
      price,
      quantity,
      weight,
    };

    // Add new item to top of the list for immediate visibility
    this.groceries.unshift(newItem);
    this.closeAddModal();
  }

  resetForm(): void {
    this.newItemName = '';
    this.newItemPrice = null;
    this.newItemQuantity = null;
    this.newItemWeight = '';
    this.errorMessage = '';
  }
}
