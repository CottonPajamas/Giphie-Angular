import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserDialogComponent } from './components/user-dialog.component';
import { UserService } from './components/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  pageIndex = 0;
  title = 'app';
  user = '';

  constructor(private router:Router, public dialog: MatDialog, private userSvc: UserService) {
    router.navigateByUrl("/TestServer/trending");
    this.user = this.userSvc.getUser();
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

  // Changing user
  openDialog(): void {
    console.log('The dialog was opened.');
    let dialogRef = this.dialog.open(UserDialogComponent, {
      width: '300px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed.');
      this.userSvc.setUser(result);
      this.user = result;
    });
  }
}


     