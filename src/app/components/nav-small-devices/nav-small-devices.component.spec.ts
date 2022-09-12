import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSmallDevicesComponent } from './nav-small-devices.component';

describe('NavSmallDevicesComponent', () => {
  let component: NavSmallDevicesComponent;
  let fixture: ComponentFixture<NavSmallDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSmallDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSmallDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
