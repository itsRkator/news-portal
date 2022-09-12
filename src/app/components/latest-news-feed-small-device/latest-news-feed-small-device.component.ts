import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-latest-news-feed-small-device',
  templateUrl: './latest-news-feed-small-device.component.html',
  styleUrls: ['./latest-news-feed-small-device.component.css'],
})
export class LatestNewsFeedSmallDeviceComponent implements OnInit {
  currentDayWeather: any = {};
  newsFeedList: any = [];
  weekWeatherFeed: any = [];
  constructor(private newsApi: NewsService) {}

  ngOnInit(): void {
    this.currentDayWeather = {
      day: 'Wed',
      temperature: '30',
      icon: 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-511.png',
    };
  
    this.newsApi.getNews().subscribe((data) => {
      this.newsFeedList = data;
    });

    this.weekWeatherFeed = [
      {
        day: 'Thu',
        temperature: '20',
        icon: 'https://cdn3.iconfinder.com/data/icons/weather-344/142/snow-512.png',
      },
      {
        day: 'Fri',
        temperature: '30',
        icon: 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-512.png',
      },
      {
        day: 'Sat',
        temperature: '30',
        icon: 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-512.png',
      },
      {
        day: 'Sun',
        temperature: '30',
        icon: 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-512.png',
      },
    ];
  }
}
