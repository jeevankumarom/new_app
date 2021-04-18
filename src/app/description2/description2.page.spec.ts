import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Description2Page } from './description2.page';

describe('Description2Page', () => {
  let component: Description2Page;
  let fixture: ComponentFixture<Description2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Description2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Description2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
