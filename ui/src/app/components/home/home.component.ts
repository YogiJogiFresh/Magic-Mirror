import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { share, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rxTime: String;
  subscription: Subscription;
  
  constructor(private datePipe: DatePipe) { }
  

  ngOnInit() {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = this.datePipe.transform(time, 'hh:mm:ss a');
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
