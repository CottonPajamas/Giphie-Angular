import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  userInput = "";

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  // Pressing confirm...
  onConfirm() {
    this.dialogRef.close(this.userInput);
  }

  // Pressing cancel...
  onCancel() {
    this.dialogRef.close(this.data);
  }
}
