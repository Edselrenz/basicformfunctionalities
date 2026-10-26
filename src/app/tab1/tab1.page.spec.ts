import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab1Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with default form values', () => {
    expect(component).toBeTruthy();
    expect(component.fullName).toBe('');
    expect(component.email).toBe('');
    expect(component.gender).toBe('');
    expect(component.country).toBe('');
    expect(component.agreeToTerms).toBe(false);
    expect(component.notifications).toBe(true);
    expect(component.bio).toBe('');
    expect(component.submitted).toBe(false);
    expect(component.submittedData).toBeNull();
  });

  it('should not submit when required fields are empty or whitespace', () => {
    component.fullName = '   ';
    component.email = 'user@example.com';
    component.onSubmit();
    expect(component.submitted).toBe(false);
    expect(component.submittedData).toBeNull();
  });

  it('should capture submittedData snapshot and mark submitted on valid submit', () => {
    component.fullName = '  Juan Dela Cruz  ';
    component.email = '  juan@example.com  ';
    component.gender = 'male';
    component.country = 'Philippines';
    component.bio = '  Ionic developer  ';
    component.notifications = false;
    component.agreeToTerms = true;

    component.onSubmit();

    expect(component.submitted).toBe(true);
    expect(component.submittedData).toEqual({
      fullName: 'Juan Dela Cruz',
      email: 'juan@example.com',
      gender: 'male',
      country: 'Philippines',
      bio: 'Ionic developer',
      notifications: false,
      agreeToTerms: true,
    });
  });

  it('should reset all fields and clear submitted state on reset', () => {
    component.fullName = 'Juan Dela Cruz';
    component.email = 'juan@example.com';
    component.gender = 'male';
    component.country = 'Philippines';
    component.agreeToTerms = true;
    component.notifications = false;
    component.bio = 'Bio text';
    component.onSubmit();

    component.onReset();

    expect(component.fullName).toBe('');
    expect(component.email).toBe('');
    expect(component.gender).toBe('');
    expect(component.country).toBe('');
    expect(component.agreeToTerms).toBe(false);
    expect(component.notifications).toBe(true);
    expect(component.bio).toBe('');
    expect(component.submitted).toBe(false);
    expect(component.submittedData).toBeNull();
  });
});
