import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bin2HexComponent } from './bin2-hex.component';

describe('Bin2HexComponent', () => {
  let component: Bin2HexComponent;
  let fixture: ComponentFixture<Bin2HexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bin2HexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bin2HexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
