import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec2BinComponent } from './dec2-bin.component';

describe('Dec2BinComponent', () => {
  let component: Dec2BinComponent;
  let fixture: ComponentFixture<Dec2BinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec2BinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dec2BinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
