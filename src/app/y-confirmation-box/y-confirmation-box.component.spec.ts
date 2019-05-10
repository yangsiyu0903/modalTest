import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YConfirmationBoxComponent } from './y-confirmation-box.component';

describe('YPromptBoxComponent', () => {
  let component: YConfirmationBoxComponent;
  let fixture: ComponentFixture<YConfirmationBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YConfirmationBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YConfirmationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
