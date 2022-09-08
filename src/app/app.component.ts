import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DispatcherService } from './services/Dispatcher.service';
import { SelectorService } from './services/Selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title: Observable<string> = this.selector.getTestValue();

  constructor(private dispatcher: DispatcherService,
              private selector: SelectorService){}


  
  trigger_1(){
    this.dispatcher.dispatch("action_1", "Pierre est gentil");
    this.title.pipe(map((value: string)=> {
      console.log("value", value);
    }));
  }

  trigger_2(){
    this.dispatcher.dispatch("action_2", "Paul es espiègle");
    this.title.pipe(map((value: string)=> {
      console.log("value", value);
    }));
  }

  trigger_3(){
    this.dispatcher.dispatch("action_3", "jacques est filou");
    this.title.pipe(map((value: string)=> {
      console.log("value", value);
    }));
  }

  trigger_4(){
    this.dispatcher.dispatch("async_action_1", null);
    this.title.pipe(map((value: string)=> {
      console.log("value", value);
    }));
  }
}
