import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsFeedSmallDeviceComponent } from './latest-news-feed-small-device.component';

describe('LatestNewsFeedSmallDeviceComponent', () => {
  let component: LatestNewsFeedSmallDeviceComponent;
  let fixture: ComponentFixture<LatestNewsFeedSmallDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNewsFeedSmallDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestNewsFeedSmallDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
