import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasswordModalComponent } from './add-password-modal.component';

describe('AddPasswordModalComponent', () => {
  let component: AddPasswordModalComponent;
  let fixture: ComponentFixture<AddPasswordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPasswordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
