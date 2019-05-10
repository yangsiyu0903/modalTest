import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YPromptBoxComponent } from './y-prompt-box.component';

describe('YPromptBoxComponent', () => {
  let component: YPromptBoxComponent;
  let fixture: ComponentFixture<YPromptBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YPromptBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YPromptBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
