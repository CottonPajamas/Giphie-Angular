import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GiphyService } from './giphy.service';
import { AppComponent } from '../app.component';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})


export class TrendingComponent implements OnInit, OnDestroy {

  user = this.userSvc.getUser();
  noGifDisplayed = 10;      // We want to show 10 at a time :)
  dataRetrieved: Array<any>;
  dataDislayed = [];
  favList: Array<any>;
  pageIndex = 0;

  // This injects the service into the component. Essentially asking angular to get our httpclient for us
  constructor(private router:Router, private http: HttpClient, private giphySvc: GiphyService, private userSvc: UserService) {
  }

  ngOnInit() {
    console.log(this.user)
    // This is our PRIMARY method used to retrieve data from the internet
    this.giphySvc.getTrending()
      .then(data => {          // This will only be run when the data has come in, if not, it will wait.
        console.log('>>>dataRetrieved: ', data.data);
        this.dataRetrieved = data.data;

        // Populating only the first amount of gifs as specified by the attr 'noGifDisplayed'
        if (this.dataRetrieved.length > this.noGifDisplayed) {
          for(var k = 0; k < this.noGifDisplayed; k++) {
            this.dataDislayed.push(this.dataRetrieved[k]);
          }
        } else {
          this.dataDislayed = this.dataRetrieved;
        }

        // Retreiving our fav list of gifs [Will only be invoked when the main data i.e 'dataRetrieved' has been obtained]
        this.giphySvc.getFavouriteList(this.user)
        .then(data => {
          console.log('>>>favList data: ', data);
          this.favList = data;

        // We modify rating to use it for our fav button
        for(var i = 0; i < this.dataRetrieved.length; i++) {
          // Here we specify "0" first as its default rating - aka 'not yet liked'
          this.dataRetrieved[i].rating = "0";
          
          //Using nested for loops to iterate our favlist and check if they are the same
          for(var j = 0; j < this.favList.length; j++) {
            // If both their title and url are the same, then let rating be "1", denoting prev 'liked' gif
            if (this.favList[j].gifTitle == this.dataRetrieved[i].title.toUpperCase()) {
              this.dataRetrieved[i].rating = "1";
              console.log("Liked")
            }
          }
        }
      })
      .catch(error => {
        console.log('>>>>Error, ', error);
      });
    }).catch(error => {
      console.log('>>>>Error, ', error);
    });
  }

  // Clicking the like button
  toggleFav(i) {
    if (this.dataRetrieved[i].rating == "0") {
      // Changes the like button to red
      this.dataRetrieved[i].rating = "1";

      // Call our service to add this gif to the database as our user's list of fav gifs
      this.giphySvc.addFavouriteGif(this.user, this.dataRetrieved[i].title.toUpperCase(), this.dataRetrieved[i].images.original.url);
    } else {
      // Changes the like button to default
      this.dataRetrieved[i].rating = "0";

      // Remove from the database
      this.giphySvc.removeFavouriteGif(this.user, this.dataRetrieved[i].title.toUpperCase(), this.dataRetrieved[i].images.original.url);
    }
  }

  // Exexcuted when the user reaches to the bottom of the screen
  onScroll () {
    if (this.noGifDisplayed < this.dataRetrieved.length) {
      console.log('scrolled!!')

      if (this.noGifDisplayed > this.dataRetrieved.length - 10) {
        var n = this.dataRetrieved.length - this.noGifDisplayed;
  
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
      this.dataDislayed.push(this.dataRetrieved[k]);
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
