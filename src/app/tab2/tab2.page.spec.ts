import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab2Page],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with initial empty displayedContent', () => {
    expect(component).toBeTruthy();
    expect(component.displayedContent).toBe('');
  });

  it('should display mission statement when showContent is called with "mission"', () => {
    component.showContent('mission');
    expect(component.displayedContent).toBe(
      'Our mission is to provide an excellent learning environment for all our students.'
    );
  });

  it('should display vision statement when showContent is called with "vision"', () => {
    component.showContent('vision');
    expect(component.displayedContent).toBe(
      'Our vision is to become the leading university in our region, fostering innovation and leadership.'
    );
  });

  it('should display tagline when showContent is called with "tagline"', () => {
    component.showContent('tagline');
    expect(component.displayedContent).toBe('Your Future, Our Commitment.');
  });

  it('should display core values when showContent is called with "coreValues"', () => {
    component.showContent('coreValues');
    expect(component.displayedContent).toBe(
      'Our core values are: \n\n1. Integrity\n2. Excellence\n3. Collaboration\n4. Compassion'
    );
  });

  it('should display "Content not found." when showContent is called with an unknown type', () => {
    component.showContent('unknown');
    expect(component.displayedContent).toBe('Content not found.');
  });
});
