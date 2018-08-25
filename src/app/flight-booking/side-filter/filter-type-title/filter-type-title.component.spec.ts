import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterTypeTitleComponent} from './filter-type-title.component';

describe('FilterTypeTitleComponent', () => {
  let component: FilterTypeTitleComponent;
  let fixture: ComponentFixture<FilterTypeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTypeTitleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTypeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
