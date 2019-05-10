import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZConfirmationBoxComponent } from './z-confirmation-box.component';

describe('ZPromptBoxComponent', () => {
  let component: ZConfirmationBoxComponent;
  let fixture: ComponentFixture<ZConfirmationBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZConfirmationBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZConfirmationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
