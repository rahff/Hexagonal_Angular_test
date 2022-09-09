import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getTweetListActionName } from 'src/shared/constants/actions.names';
import { Tweet } from '../../core/entities/Tweet';
import { NewsFeedDispatcher } from '../services/NewsFeedDispatcher';
import { NewsFeedSelector } from '../services/NewsFeedSelector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tweetList$!: Observable<Tweet[]>;

  constructor(private selector: NewsFeedSelector,
              private dispatcher: NewsFeedDispatcher){}

  ngOnInit(): void {
    this.dispatcher.dispatch(getTweetListActionName, null)
    this.tweetList$ = this.selector.getTweetList();
  }
}
