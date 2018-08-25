import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FareSummeryRulesComponent} from './fare-summery-rules.component';

describe('FareSummeryRulesComponent', () => {
  let component: FareSummeryRulesComponent;
  let fixture: ComponentFixture<FareSummeryRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FareSummeryRulesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FareSummeryRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
