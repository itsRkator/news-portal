import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hotBackground: any;
  news: any;
  date: any;
  weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  weekTemperature = [
    {
      day: 'Monday',
      temperature: '30',
      nextDayTemperature: '32',
      icon: 'sunny',
    },
    {
      day: 'Tuesday',
      temperature: '32',
      nextDayTemperature: '34',
      icon: 'sunny',
    },
    {
      day: 'Wednesday',
      temperature: '33',
      nextDayTemperature: '35',
      icon: 'sunny',
    },
    {
      day: 'Thursday',
      temperature: '34',
      nextDayTemperature: '36',
      icon: 'sunny',
    },
    {
      day: 'Friday',
      temperature: '35',
      nextDayTemperature: '37',
      icon: 'sunny',
    },
    {
      day: 'Saturday',
      temperature: '36',
      nextDayTemperature: '38',
    },
    {
      day: 'Sunday',
      temperature: '37',
      nextDayTemperature: '39',
      icon: 'sunny',
    },
  ];
  weather: any;
  nextSevenDays: any;

  constructor(private newsApi: NewsService) {}

  ngOnInit(): void {
    this.newsApi.getNews().subscribe((data) => {
      this.news = data;
    });

    let currentDate = new Date();
    let day = this.weekdays[currentDate.getDay()];
    let month = this.months[currentDate.getMonth()];
    let year = Number(currentDate.getFullYear().toString().slice(-2));
    let monthDate = currentDate.getDate();
    this.date = day + ' ' + monthDate + ' ' + month + " " + year + "'";

    this.weather = {
      city: 'Delhi, IND',
      temperature: '30',
    };

    this.nextSevenDays = this.weekdays
      .slice(currentDate.getDay() + 1)
      .concat(this.weekdays.slice(0, currentDate.getDay()));
    
    this.weekTemperature.sort((a, b) => this.nextSevenDays.indexOf(a.day) - this.nextSevenDays.indexOf(b.day));
    this.weekTemperature.splice(0, 1);
    this.weekTemperature.pop();
  }
}
