import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZPromptBoxComponent } from './z-prompt-box.component';

describe('ZPromptBoxComponent', () => {
  let component: ZPromptBoxComponent;
  let fixture: ComponentFixture<ZPromptBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZPromptBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZPromptBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
