import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab4Page } from './tab4.page';

describe('Tab4Page', () => {
  let component: Tab4Page;
  let fixture: ComponentFixture<Tab4Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab4Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Tab4Page successfully', () => {
    expect(component).toBeTruthy();
    expect(component.activeView).toBe('all');
    expect(component.isModalOpen).toBe(false);
  });

  it('should display at least 20 initial grocery items', () => {
    expect(component.groceries.length).toBeGreaterThanOrEqual(20);
    // Every item must have price, quantity, and weight
    component.groceries.forEach((item) => {
      expect(item.name).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
      expect(item.quantity).toBeGreaterThan(0);
      expect(item.weight).toBeTruthy();
    });
  });

  it('should have initial list of students and grades', () => {
    expect(component.students.length).toBeGreaterThan(0);
    component.students.forEach((student) => {
      expect(student.name).toBeTruthy();
      expect(student.grade).toBeGreaterThanOrEqual(0);
    });
  });

  it('should return correct grade remarks and colors', () => {
    expect(component.getGradeRemark(95)).toBe('Outstanding');
    expect(component.getGradeColor(95)).toBe('success');

    expect(component.getGradeRemark(85)).toBe('Very Satisfactory');
    expect(component.getGradeColor(85)).toBe('primary');

    expect(component.getGradeRemark(75)).toBe('Passed');
    expect(component.getGradeColor(75)).toBe('primary');

    expect(component.getGradeRemark(70)).toBe('Failed');
    expect(component.getGradeColor(70)).toBe('danger');
  });

  it('should open and close the add grocery modal and reset form', () => {
    component.openAddModal();
    expect(component.isModalOpen).toBe(true);

    component.newItemName = 'Test Item';
    component.newItemPrice = 100;
    component.closeAddModal();

    expect(component.isModalOpen).toBe(false);
    expect(component.newItemName).toBe('');
    expect(component.newItemPrice).toBeNull();
  });

  it('should show error when required fields are missing on add', () => {
    const initialCount = component.groceries.length;
    component.newItemName = '   ';
    component.newItemPrice = null;
    component.addGroceryItem();

    expect(component.errorMessage).toBeTruthy();
    expect(component.groceries.length).toBe(initialCount);
  });

  it('should reject zero or negative price and quantity', () => {
    const initialCount = component.groceries.length;
    component.newItemName = 'Salt';
    component.newItemWeight = '500 g';
    component.newItemPrice = 0;
    component.newItemQuantity = -1;
    component.addGroceryItem();

    expect(component.errorMessage).toBe('Price and quantity must be greater than zero.');
    expect(component.groceries.length).toBe(initialCount);
  });

  it('should successfully add a new grocery item to the list', () => {
    const initialCount = component.groceries.length;
    component.newItemName = 'Extra Virgin Olive Oil';
    component.newItemPrice = 320;
    component.newItemQuantity = 2;
    component.newItemWeight = '750 mL';

    component.addGroceryItem();

    expect(component.groceries.length).toBe(initialCount + 1);
    expect(component.groceries[0].name).toBe('Extra Virgin Olive Oil');
    expect(component.groceries[0].price).toBe(320);
    expect(component.groceries[0].quantity).toBe(2);
    expect(component.groceries[0].weight).toBe('750 mL');
    expect(component.isModalOpen).toBe(false);
  });
});
