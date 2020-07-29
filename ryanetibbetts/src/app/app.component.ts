import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'ryanetibbetts';
  public currentFlavorA = 0;
  public currentFlavorB = 0;
  public flavorArrA = ['Welcome', 'Imagine', 'Responsive', 'Greatful', 'Win Win Win No Matter What', 'Another One', 'And Another One'];
  public flavorArrB = ['Breath', 'All Yours', 'Loyal', 'I Appreciate You', 'Another One', 'Another One', 'And Another One'];
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
}
