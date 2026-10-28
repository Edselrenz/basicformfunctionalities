import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonItem,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonNote,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { backspaceOutline, calculatorOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonList,
    IonItem,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonNote,
    IonButtons,
    IonMenuButton,
  ],
})
export class Tab3Page {
  mode: 'keypad' | 'form' = 'keypad';

  // --- Keypad Calculator State ---
  display = '0';
  history = '';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand = false;
  hasError = false;

  // --- Two-Number Form State ---
  num1: number | null = null;
  num2: number | null = null;
  selectedFormOp: '+' | '-' | '×' | '÷' = '+';
  formResult: string | null = null;
  formError: string | null = null;

  constructor() {
    addIcons({ backspaceOutline, calculatorOutline });
  }

  // --- Keypad Calculator Methods ---
  inputDigit(digit: string): void {
    if (this.hasError) {
      this.clearAll();
    }

    if (this.waitingForSecondOperand) {
      this.display = digit;
      this.waitingForSecondOperand = false;
    } else {
      if (this.display === '0') {
        this.display = digit;
      } else if (this.display.length < 15) {
        this.display += digit;
      }
    }
  }

  inputDecimal(): void {
    if (this.hasError) {
      this.clearAll();
    }

    if (this.waitingForSecondOperand) {
      this.display = '0.';
      this.waitingForSecondOperand = false;
      return;
    }

    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  handleOperator(nextOperator: string): void {
    if (this.hasError) {
      return;
    }

    const inputValue = parseFloat(this.display);

    if (this.operator && this.waitingForSecondOperand) {
      this.operator = nextOperator;
      this.history = `${this.formatNumber(this.firstOperand!)} ${nextOperator}`;
      return;
    }

    if (this.firstOperand === null && !isNaN(inputValue)) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.calculate(this.firstOperand!, inputValue, this.operator);

      if (result === null) {
        this.handleCalculationError();
        return;
      }

      this.display = this.formatNumber(result);
      this.firstOperand = result;
    }

    this.waitingForSecondOperand = true;
    this.operator = nextOperator;
    this.history = `${this.formatNumber(this.firstOperand!)} ${nextOperator}`;
  }

  calculateEquals(): void {
    if (this.hasError || this.operator === null || this.firstOperand === null) {
      return;
    }

    const inputValue = parseFloat(this.display);
    const prev = this.firstOperand;
    const op = this.operator;
    const result = this.calculate(prev, inputValue, op);

    if (result === null) {
      this.handleCalculationError();
      return;
    }

    this.history = `${this.formatNumber(prev)} ${op} ${this.formatNumber(inputValue)} =`;
    this.display = this.formatNumber(result);
    this.firstOperand = result;
    this.operator = null;
    this.waitingForSecondOperand = true;
  }

  calculate(first: number, second: number, op: string): number | null {
    switch (op) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '×':
        return first * second;
      case '÷':
        if (second === 0) {
          return null;
        }
        return first / second;
      default:
        return second;
    }
  }

  clearAll(): void {
    this.display = '0';
    this.history = '';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
    this.hasError = false;
  }

  deleteLast(): void {
    if (this.hasError || this.waitingForSecondOperand) {
      return;
    }

    if (this.display.length > 1) {
      if (this.display.length === 2 && this.display.startsWith('-')) {
        this.display = '0';
      } else {
        this.display = this.display.slice(0, -1);
      }
    } else {
      this.display = '0';
    }
  }

  toggleSign(): void {
    if (this.hasError) {
      return;
    }
    const val = parseFloat(this.display);
    if (val !== 0 && !isNaN(val)) {
      const toggled = -val;
      this.display = this.formatNumber(toggled);
      if (this.waitingForSecondOperand) {
        this.firstOperand = toggled;
      }
    }
  }

  percentage(): void {
    if (this.hasError) {
      return;
    }
    const val = parseFloat(this.display);
    if (!isNaN(val)) {
      const result = val / 100;
      this.display = this.formatNumber(result);
      if (this.waitingForSecondOperand) {
        this.firstOperand = result;
      }
    }
  }

  private handleCalculationError(): void {
    this.display = 'Error';
    this.history = 'Cannot divide by zero';
    this.hasError = true;
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  formatNumber(num: number): string {
    if (isNaN(num)) {
      return 'Error';
    }
    const rounded = parseFloat(num.toFixed(10));
    return rounded.toString();
  }

  // --- Two-Number Form Methods ---
  computeForm(op?: '+' | '-' | '×' | '÷'): void {
    if (op) {
      this.selectedFormOp = op;
    }

    this.formError = null;

    if (this.num1 === null || this.num2 === null || isNaN(this.num1) || isNaN(this.num2)) {
      this.formError = 'Please enter both numbers.';
      this.formResult = null;
      return;
    }

    if (this.selectedFormOp === '÷' && this.num2 === 0) {
      this.formError = 'Cannot divide by zero.';
      this.formResult = null;
      return;
    }

    const res = this.calculate(this.num1, this.num2, this.selectedFormOp);
    if (res === null) {
      this.formError = 'Invalid calculation.';
      this.formResult = null;
    } else {
      this.formResult = `${this.num1} ${this.selectedFormOp} ${this.num2} = ${this.formatNumber(res)}`;
    }
  }

  clearForm(): void {
    this.num1 = null;
    this.num2 = null;
    this.selectedFormOp = '+';
    this.formResult = null;
    this.formError = null;
  }
}
