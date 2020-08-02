import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from "./contact-dialog/contact-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  public currentFlavorA = 0;
  public currentFlavorB = 0;
  public flavorArrA = ['Welcome', 'See Greatness', 'Responsive Design', 'Material Design' ,'Create Your Website', 'Now Is The Time'];
  public flavorArrB = ['Have A Seat', 'AWS Technology', 'Angular 9', 'Reasonable Pricing', 'Reach Out Today', 'Create Your Dream'];
  public flavorSwap = true;

  ngOnInit() {
    // useFlavorB tells the algorithm to wait to cycle flavorArrB
    let useFlavorB = false;
    setInterval(() => {
      // everytime the flavor swaps, update the flavor we can't see
      if (this.flavorSwap) {
        if(useFlavorB) {
          if(this.currentFlavorB+1 < this.flavorArrB.length) {
            this.currentFlavorB++;
          } else {
            this.currentFlavorB = 0;
          }
        } else {
          useFlavorB = true;
        }
      } else {
        if(this.currentFlavorA+1 < this.flavorArrA.length) {
          this.currentFlavorA++;
        } else {
          this.currentFlavorA = 0;
        }
      }
      this.flavorSwap = !this.flavorSwap;
      console.log(this.flavorSwap);
    }, 5000);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
