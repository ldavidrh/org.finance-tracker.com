import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create App component', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });
});
