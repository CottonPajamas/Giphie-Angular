import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

// Enter your api key here in string format
const api_Key = "<< Enter your api key here>>";

@Injectable()
export class GiphyService {

  searchEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  getSearchQuery(br: string): Promise<any> {
    let qs = new HttpParams()
      .set('base', br);

    //Returns an observable
    return (
      this.http.get('https://api.giphy.com/v1/gifs/search?api_key=' + api_Key + '&q=' + br + '&limit=100&offset=0&rating=G&lang=en')
          .toPromise()    // Converts the event into a promise
        .then((result) => {
          return (result);
        })
    ); //convert the event to a promise
  }

  // Retrieve a list of gifs to be displayed under our trending page
  getTrending(): Promise<any> {
    //Returns an observable
    return (
      this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=' + api_Key + '&limit=100&rating=G')
          .toPromise()    // Converts the event into a promise
        .then((result) => {
          //console.log(result)
          return (result);
        })
    ); //convert the event to a promise
  }

  // Post to add our 'liked' gif
  addFavouriteGif(user: string, gifTitle: string, gifLink: string) {
    var data = {
      userName: user,
      gifTitle: gifTitle,
      gifLink: gifLink
    }
    
    var message = JSON.stringify(data);
    console.log(message)
    this.http.post('TestServer/api/saveFavourite', message, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Access-Control-Allow-Headers', 'Content-Type')
    }).subscribe(
      (data:any) => {           // This allows us to see the response from our server
        if (data == null) console.log("Addition success.") 
        else console.log(data)  
      }
    )
  }

  // Post to delete our prev 'liked' gif
  removeFavouriteGif(user: string, gifTitle: string, gifLink: string) {
    var data = {
      userName: user,
      gifTitle: gifTitle,
      gifLink: gifLink
    }
    
    var message = JSON.stringify(data);
    console.log(message)
    this.http.post('TestServer/api/deleteFavourite', message, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('Access-Control-Allow-Headers', 'Content-Type')
    }).subscribe(
      (data:any) => {
        if (data == null) console.log("Removal success!") 
        else console.log(data)  
      }
    )
  }

  // Retrieve fav list of gifs for the specific
  getFavouriteList(userName: String): Promise<any> {
    //Returns an observable
    return (
      this.http.get(`TestServer/api/retrieveFavourites/${userName}`)
          .toPromise() 
        .then((result) => {
          //console.log(result)
          return (result);
        })
    ); //convert the event to a promise
  }
}