import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab3Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with default keypad mode and display "0"', () => {
    expect(component).toBeTruthy();
    expect(component.mode).toBe('keypad');
    expect(component.display).toBe('0');
    expect(component.history).toBe('');
  });

  it('should input digits correctly', () => {
    component.inputDigit('5');
    expect(component.display).toBe('5');

    component.inputDigit('2');
    expect(component.display).toBe('52');
  });

  it('should handle decimal input and prevent duplicate decimals', () => {
    component.inputDecimal();
    expect(component.display).toBe('0.');

    component.inputDigit('5');
    component.inputDecimal();
    expect(component.display).toBe('0.5');
  });

  it('should perform addition correctly (7 + 5 = 12)', () => {
    component.inputDigit('7');
    component.handleOperator('+');
    expect(component.history).toBe('7 +');

    component.inputDigit('5');
    component.calculateEquals();
    expect(component.display).toBe('12');
    expect(component.history).toBe('7 + 5 =');
  });

  it('should perform subtraction correctly (15 - 8 = 7)', () => {
    component.inputDigit('1');
    component.inputDigit('5');
    component.handleOperator('-');
    component.inputDigit('8');
    component.calculateEquals();
    expect(component.display).toBe('7');
  });

  it('should perform multiplication correctly (6 × 7 = 42)', () => {
    component.inputDigit('6');
    component.handleOperator('×');
    component.inputDigit('7');
    component.calculateEquals();
    expect(component.display).toBe('42');
  });

  it('should perform division correctly (20 ÷ 4 = 5)', () => {
    component.inputDigit('2');
    component.inputDigit('0');
    component.handleOperator('÷');
    component.inputDigit('4');
    component.calculateEquals();
    expect(component.display).toBe('5');
  });

  it('should handle division by zero with error message', () => {
    component.inputDigit('9');
    component.handleOperator('÷');
    component.inputDigit('0');
    component.calculateEquals();
    expect(component.display).toBe('Error');
    expect(component.hasError).toBe(true);
  });

  it('should toggle positive and negative sign', () => {
    component.inputDigit('8');
    component.toggleSign();
    expect(component.display).toBe('-8');
    component.toggleSign();
    expect(component.display).toBe('8');
  });

  it('should calculate percentage', () => {
    component.inputDigit('5');
    component.inputDigit('0');
    component.percentage();
    expect(component.display).toBe('0.5');
  });

  it('should backspace / delete last digit', () => {
    component.inputDigit('1');
    component.inputDigit('2');
    component.inputDigit('3');
    component.deleteLast();
    expect(component.display).toBe('12');
    component.deleteLast();
    expect(component.display).toBe('1');
    component.deleteLast();
    expect(component.display).toBe('0');
  });

  it('should reset all state on clearAll (AC)', () => {
    component.inputDigit('9');
    component.handleOperator('+');
    component.inputDigit('3');
    component.clearAll();
    expect(component.display).toBe('0');
    expect(component.history).toBe('');
    expect(component.firstOperand).toBeNull();
    expect(component.operator).toBeNull();
    expect(component.waitingForSecondOperand).toBe(false);
  });

  it('should chain operators sequentially (5 + 3 × 2)', () => {
    component.inputDigit('5');
    component.handleOperator('+');
    component.inputDigit('3');
    component.handleOperator('×');
    expect(component.display).toBe('8');
    component.inputDigit('2');
    component.calculateEquals();
    expect(component.display).toBe('16');
  });

  it('should compute two-number form operations and handle division by zero', () => {
    component.mode = 'form';
    component.num1 = 25;
    component.num2 = 5;

    component.computeForm('+');
    expect(component.formResult).toBe('25 + 5 = 30');

    component.computeForm('-');
    expect(component.formResult).toBe('25 - 5 = 20');

    component.computeForm('×');
    expect(component.formResult).toBe('25 × 5 = 125');

    component.computeForm('÷');
    expect(component.formResult).toBe('25 ÷ 5 = 5');

    // Division by zero in form
    component.num2 = 0;
    component.computeForm('÷');
    expect(component.formError).toBe('Cannot divide by zero.');
    expect(component.formResult).toBeNull();

    // Clear form
    component.clearForm();
    expect(component.num1).toBeNull();
    expect(component.num2).toBeNull();
    expect(component.formResult).toBeNull();
  });
});
