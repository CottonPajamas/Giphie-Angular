import { Component, OnInit, OnDestroy } from '@angular/core';
import { GiphyService } from './giphy.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit, OnDestroy {

  noGifDisplayed = 10;      // We want to show 10 at a time :)
  dataDislayed = [];
  user = this.userSvc.getUser();
  favList: Array<any>;
  pageIndex = 0;

  constructor(private router:Router, private giphySvc: GiphyService, private userSvc: UserService) { }

  ngOnInit() {
    // Retreiving our fav list of gifs [Will only be invoked when the main data i.e 'dataRetrieved' has been obtained]
    this.giphySvc.getFavouriteList(this.user)
    .then(data => {
      console.log('>>>favList data: ', data);
      this.favList = data;
      this.favList = this.favList.reverse();
      
      // Populating only the first amount of gifs as specified by the attr 'noGifDisplayed'
      if (this.favList.length > this.noGifDisplayed) {
        for(var k = 0; k < this.noGifDisplayed; k++) {
          this.dataDislayed.push(this.favList[k]);
        }
      } else {
        this.dataDislayed = this.favList;
      }
    }).catch(error => {
      console.log('>>>>Error, ', error);
    });
  }

  // When user click the like button
  toggleFav(i) {
    // If clicked, then it will be gone :(
    this.giphySvc.removeFavouriteGif(this.user, this.dataDislayed[i].gifTitle.toUpperCase(), this.dataDislayed[i].gifLink);
    this.dataDislayed.splice(i,1);
  }

  // Exexcuted when the user reaches to the bottom of the screen
  onScroll () {
    if (this.noGifDisplayed < this.favList.length) {
      console.log('scrolled!!')

      if (this.noGifDisplayed > this.favList.length - 10) {
        var n = this.favList.length - this.noGifDisplayed;
  
        // Populating the next n
        this.populate(n);
      } else {
        // Populating the next 10
        this.populate(10);  
      }
    }
  }

  // Populating the dataDisplayed array
  populate(num: number) {
    // Populating the next 10
    for(var k = this.noGifDisplayed; k < this.noGifDisplayed + num; k++) {
      this.dataDislayed.push(this.favList[k]);
    } 
    this.noGifDisplayed += num;
  }

  // Swipe events
  swipeLeft() {
    var ss = this.router.url;
    var data = this.userSvc.swipeLeft(ss);
    this.pageIndex = data[0];
    this.router.navigateByUrl(data[1]);
  }
  swipeRight() {
    var ss = this.router.url;
    var data = this.userSvc.swipeRight(ss);
    this.pageIndex = data[0];
    this.router.navigateByUrl(data[1]);
  }

  // Destroy
  ngOnDestroy() {
    console.log('Service destroy')
  }
}
