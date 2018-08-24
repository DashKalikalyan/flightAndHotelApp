import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileWalletComponent } from './mobile-wallet.component';

describe('MobileWalletComponent', () => {
  let component: MobileWalletComponent;
  let fixture: ComponentFixture<MobileWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
