import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-latest-news-feed',
  templateUrl: './latest-news-feed.component.html',
  styleUrls: ['./latest-news-feed.component.css'],
})
export class LatestNewsFeedComponent implements OnInit {
  latestNewsArr: any = [];
  loader: boolean = false;
  constructor(private newsApi: NewsService) {}

  ngOnInit(): void {
    this.newsApi.getNews().subscribe((data) => {
      this.latestNewsArr = data;
    });
    // this.latestNewsArr = [
    //   {
    //     title: 'UP CM orders action against officials',
    //     image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11GU9U.img?w=768&h=432&m=6&x=179&y=114&s=777&d=227',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'New mineral found by Chinese scientists',
    //     image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11GUno.img?w=768&h=512&m=6',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Authority warns owners of dog',
    //     image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11H0vE.img?w=768&h=432&m=6',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'When you see the inside, you want to live here!',
    //     image: 'https://content-cdn.tips-and-tricks.co/wp-content/uploads/2020/12/09173850/barn-300x200.jpg',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 5',
    //     image: 'https://content-cdn.tips-and-tricks.co/wp-content/uploads/2020/12/09173850/barn-300x200.jpg',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 6',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 7',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 8',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 9',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 10',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 11',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 12',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 13',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 14',
    //     time: '2 hours ago',
    //   },
    //   {
    //     title: 'Latest News 15',
    //     time: '2 hours ago',
    //   },
    // ]
  }

  addNewsDataOnScrollEnd(event: any) {
    this.loader = true;
    let newsUpdate;
    if (
      event.target.offsetHeight + event.target.scrollTop <=
        event.target.scrollHeight &&
      event.target.offsetHeight + event.target.scrollTop >=
        event.target.scrollHeight - 1
    ) {
      this.newsApi.getNews().subscribe((data) => {
        newsUpdate = data;
        this.latestNewsArr.push(newsUpdate);
      });
    }
    this.loader = false;
    console.log('Scroll End');
  }
}
