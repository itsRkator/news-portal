import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsFeedComponent } from './latest-news-feed.component';

describe('LatestNewsFeedComponent', () => {
  let component: LatestNewsFeedComponent;
  let fixture: ComponentFixture<LatestNewsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNewsFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
