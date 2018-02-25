import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';    // Import this to use forms
import { HttpClientModule } from '@angular/common/http';      // Import this to talk to the network via http
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';    // Import this to be able to direct to diff components (webpage) like a normal webapp 
import 'hammerjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { UserService } from './components/user.service';  
import { GiphyService } from './components/giphy.service';        // Gotta add this manually when creating service cos we creating the file from scratch
import { TrendingComponent } from './components/trending.component';
import { SearchComponent } from './components/search.component';
import { UserComponent } from './components/user.component';
import { UserDialogComponent } from './components/user-dialog.component';



// Here we specify the diff routes that we want our webapp to have and store it in an array. [Only these two cos we wanna refresh these pages]
const appRoutes: Routes = [
  {path:'TestServer', component:TrendingComponent},
  {path:'TestServer/search', component:SearchComponent},
  {path:'TestServer/favourites', component:UserComponent},
  { path: "**", redirectTo: '/TestServer', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    SearchComponent,
    UserComponent,
    UserDialogComponent
  ],
  entryComponents: [
    UserDialogComponent    // Must be placed both in the declarations and here for it to work
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule
  ],
  providers: [GiphyService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* NOTE: OPEN BROWSER WITH DISABLE WEB SECURITY 

For windows, enter this into cmd:
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security

*/
