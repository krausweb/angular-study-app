import { TestBed, async } from '@angular/core/testing';
import { CarsComponent } from './cars.component';

describe('CarsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CarsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Cars Component'`, async(() => {
    const fixture = TestBed.createComponent(CarsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Cars Component');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CarsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1.cars').textContent).toContain('Cars');
  }));
});
