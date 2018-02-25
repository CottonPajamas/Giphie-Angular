import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    public user: string;
    public sQuery: string;

    constructor() {
        this.user = 'Default';
        this.sQuery = '';
    }

    public getUser(): string {
        return this.user;
    }

    public setUser(val: string) {
        this.user = val;
    }

    public getQuery(): string {
        return this.sQuery;
    }

    public setQuery(val: string) {
        this.sQuery = val;
    }

    // Methods used to det which page user currently on and which page to direct to next
    public swipeLeft(ss: string): any {
        switch(ss) {
            case '/TestServer':
                console.log("Trending found");
                var data = [1, "/TestServer/search"];
                return data;
            case '/TestServer/search':
                console.log("Search found");
                var data = [2, "/TestServer/favourites"];
                return data;
            case '/TestServer/favourites':
                console.log("Favourites found");
                var data = [2, "/TestServer/favourites"];
                return data;
            default:
                console.log("Go to trending");
                var data = [0, "/TestServer"];
                return data;
        } 
    }
    public swipeRight(ss: string): any {
        switch(ss) {
          case '/TestServer':
                console.log("Trending found");
                var data = [0, "/TestServer"];
                return data;
          case '/TestServer/search':
                console.log("Search found");
                var data = [0, "/TestServer"];
                return data;
          case '/TestServer/favourites':
                console.log("Favourites found");
                var data = [1, "/TestServer/search"];
                return data;
          default:
                console.log("Go to trending");
                var data = [0, "/TestServer"];
                return data;
        }
      }
}
