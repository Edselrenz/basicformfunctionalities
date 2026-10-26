import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  public displayedContent: string = '';

  constructor() {}

  public showContent(type: string): void {
    switch (type) {
      case 'mission':
        this.displayedContent =
          'Our mission is to provide an excellent learning environment for all our students.';
        break;

      case 'vision':
        this.displayedContent =
          'Our vision is to become the leading university in our region, fostering innovation and leadership.';
        break;

      case 'tagline':
        this.displayedContent = 'Your Future, Our Commitment.';
        break;

      case 'coreValues':
        this.displayedContent =
          'Our core values are:\n\n1. Integrity\n2. Excellence\n3. Collaboration\n4. Compassion';
        break;

      default:
        this.displayedContent = 'Content not found.';
    }
  }
}