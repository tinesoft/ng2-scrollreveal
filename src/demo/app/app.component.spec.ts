import { NgsRevealModule } from './shared/ngs-reveal.module';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: Ng2Scrollreveal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgsRevealModule.forRoot()],
      declarations: [
        AppComponent
      ],
      providers: []
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
