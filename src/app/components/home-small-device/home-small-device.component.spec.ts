import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSmallDeviceComponent } from './home-small-device.component';

describe('HomeSmallDeviceComponent', () => {
  let component: HomeSmallDeviceComponent;
  let fixture: ComponentFixture<HomeSmallDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSmallDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSmallDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
