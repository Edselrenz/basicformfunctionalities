import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SystemPage } from './system.page';

describe('SystemPage', () => {
  let component: SystemPage;
  let fixture: ComponentFixture<SystemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SystemPage', () => {
    expect(component).toBeTruthy();
  });

  it('should expose platform and connectivity status', () => {
    expect(component.platformName).toBeTruthy();
    expect(typeof component.isOnline).toBe('boolean');
  });
});

