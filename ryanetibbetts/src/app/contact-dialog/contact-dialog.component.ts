import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  email = "Tibbetts.E.Ryan@gmail.com";

  constructor(public dialogRef: MatDialogRef<ContactDialogComponent>,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  copySnackbar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
