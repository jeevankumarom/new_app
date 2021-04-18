import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Description3Page } from './description3.page';

describe('Description3Page', () => {
  let component: Description3Page;
  let fixture: ComponentFixture<Description3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Description3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Description3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
