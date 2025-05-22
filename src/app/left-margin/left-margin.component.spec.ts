import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMarginComponent } from './left-margin.component';

describe('LeftMarginComponent', () => {
  let component: LeftMarginComponent;
  let fixture: ComponentFixture<LeftMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftMarginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
