import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Tweet } from 'src/core/entities/Tweet';
import { tweetList } from 'src/core/mocks/tweetList';
import { NewsFeedStoreModule } from 'src/infrastructure/modules/newsFeedStore.module';
import { getTweetListActionName } from 'src/shared/constants/actions.names';
import { NewsFeedDispatcher } from '../services/NewsFeedDispatcher';
import { NewsFeedSelector } from '../services/NewsFeedSelector';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let selectorSpy: any;
  let dispatcherSpy: any;
  beforeEach(async () => {
    dispatcherSpy = jasmine.createSpyObj("NewsFeedDispatcher", ["dispatch"])
    selectorSpy = jasmine.createSpyObj("NewsFeedSelector", ["getTweetList"])
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NewsFeedStoreModule
      ],
      providers: [
        {
          provide: NewsFeedSelector, useValue: selectorSpy
        },
        {
          provide: NewsFeedDispatcher, useValue: dispatcherSpy
        }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture =  TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of tweet', ()=> {
    expect(dispatcherSpy.dispatch).toHaveBeenCalledWith(getTweetListActionName, null)
    selectorSpy.getTweetList.and.returnValue(of(tweetList))
    component.ngOnInit();
    component.tweetList$.subscribe((list: Tweet[])=>{
      expect(list).toEqual(tweetList)
    })
  })
});
