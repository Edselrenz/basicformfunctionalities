import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import {
  StoragePage,
  STORAGE_KEY_AGE,
  STORAGE_KEY_COLOR,
  STORAGE_KEY_TIMESTAMP,
} from './storage.page';

describe('StoragePage', () => {
  let component: StoragePage;
  let fixture: ComponentFixture<StoragePage>;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [StoragePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create StoragePage', () => {
    expect(component).toBeTruthy();
  });

  it('should save age and favorite color to local storage', () => {
    component.inputAge = 25;
    component.inputColor = 'Navy Blue';
    component.saveToLocalStorage();

    expect(localStorage.getItem(STORAGE_KEY_AGE)).toBe('25');
    expect(localStorage.getItem(STORAGE_KEY_COLOR)).toBe('Navy Blue');
    expect(localStorage.getItem(STORAGE_KEY_TIMESTAMP)).toBeTruthy();
    expect(component.feedbackType).toBe('success');
  });

  it('should save only age if color is omitted', () => {
    component.inputAge = 30;
    component.inputColor = '';
    component.saveToLocalStorage();

    expect(localStorage.getItem(STORAGE_KEY_AGE)).toBe('30');
    expect(localStorage.getItem(STORAGE_KEY_COLOR)).toBeNull();
    expect(component.feedbackType).toBe('success');
  });

  it('should save only favorite color if age is omitted', () => {
    component.inputAge = null;
    component.inputColor = 'Emerald';
    component.saveToLocalStorage();

    expect(localStorage.getItem(STORAGE_KEY_AGE)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY_COLOR)).toBe('Emerald');
    expect(component.feedbackType).toBe('success');
  });

  it('should prevent saving if both age and color are empty', () => {
    component.inputAge = null;
    component.inputColor = '';
    component.saveToLocalStorage();

    expect(localStorage.getItem(STORAGE_KEY_AGE)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY_COLOR)).toBeNull();
    expect(component.feedbackType).toBe('info');
  });

  it('should display saved values when displayFromLocalStorage is called', () => {
    localStorage.setItem(STORAGE_KEY_AGE, '28');
    localStorage.setItem(STORAGE_KEY_COLOR, '#059669');

    component.displayFromLocalStorage();

    expect(component.isDataDisplayed).toBe(true);
    expect(component.displayedAge).toBe(28);
    expect(component.displayedColor).toBe('#059669');
    expect(component.feedbackType).toBe('success');
  });

  it('should handle displayFromLocalStorage when storage is empty', () => {
    component.displayFromLocalStorage();

    expect(component.isDataDisplayed).toBe(false);
    expect(component.displayedAge).toBeNull();
    expect(component.displayedColor).toBeNull();
    expect(component.feedbackType).toBe('info');
  });

  it('should clear stored info from local storage when clearLocalStorage is called', () => {
    localStorage.setItem(STORAGE_KEY_AGE, '40');
    localStorage.setItem(STORAGE_KEY_COLOR, 'Teal');

    component.displayFromLocalStorage();
    expect(component.isDataDisplayed).toBe(true);

    component.clearLocalStorage();

    expect(localStorage.getItem(STORAGE_KEY_AGE)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY_COLOR)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY_TIMESTAMP)).toBeNull();
    expect(component.isDataDisplayed).toBe(false);
    expect(component.displayedAge).toBeNull();
    expect(component.displayedColor).toBeNull();
    expect(component.feedbackType).toBe('danger');
  });

  it('should set inputColor when a preset chip is selected', () => {
    component.selectPresetColor('#1e3a8a');
    expect(component.inputColor).toBe('#1e3a8a');
  });
});

