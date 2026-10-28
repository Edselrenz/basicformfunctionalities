import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SettingsPage', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dark mode class on document element', () => {
    component.isDarkMode = true;
    component.toggleDarkMode();
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBe(true);

    component.isDarkMode = false;
    component.toggleDarkMode();
    expect(document.documentElement.classList.contains('ion-palette-dark')).toBe(false);
  });

  it('should set cacheCleared flag when clearCache is called', () => {
    expect(component.cacheCleared).toBe(false);
    component.clearCache();
    expect(component.cacheCleared).toBe(true);
  });
});

