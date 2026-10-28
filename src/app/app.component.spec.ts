import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render a side menu with title "Navigation"', () => {
    const titleElement = fixture.debugElement.query(By.css('ion-menu ion-title'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent).toContain('Navigation');
  });

  it('should have navigation menu items including Home, Profile, Settings, System, Dashboard, and Preferences Vault', () => {
    const menuItems = fixture.debugElement.queryAll(By.css('ion-menu ion-item'));
    expect(menuItems.length).toBe(6);

    const labels = menuItems.map((item) =>
      item.nativeElement.textContent.trim()
    );
    expect(labels).toContain('Home');
    expect(labels).toContain('Profile');
    expect(labels).toContain('Settings');
    expect(labels).toContain('System');
    expect(labels).toContain('Dashboard');
    expect(labels).toContain('Preferences Vault');
  });
});
