import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'angu17-theme' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angu17-theme');
=======
  it(`should have the 'prime-ng' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('prime-ng');
>>>>>>> e14c78f (initial commit)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angu17-theme');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, prime-ng');
>>>>>>> e14c78f (initial commit)
  });
});
