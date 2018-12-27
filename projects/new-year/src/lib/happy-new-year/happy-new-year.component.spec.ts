import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyNewYearComponent } from './happy-new-year.component';

describe('HappyNewYearComponent', () => {
  let component: HappyNewYearComponent;
  let fixture: ComponentFixture<HappyNewYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyNewYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyNewYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
