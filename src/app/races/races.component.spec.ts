import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RacesComponent } from './races.component';

describe('RacesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RacesComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RacesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Racing Component'`, async(() => {
    const fixture = TestBed.createComponent(RacesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Racing Component');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(RacesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1.races').textContent).toContain('Welcome to Racing Component!');
  }));
});
