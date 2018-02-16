import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value = 0;      /* variable containing the current input number to be displayed on screen*/
  formula = "";   /*Containing the whole formula line to be diplayed above the current input value */

  // Displaying the current input on screen after clicking a number
  // adding the current value to the formula for further display
  displayValue(event) {
    // this line of code prevents appending multiple zeros or numbers beginning with zero
    if (this.value === 0 || this.value.toString() === "0") {
      this.value = event.target.value;
    }
    else {
      this.value += event.target.value;
    }
  }

  // Setting the function of the buttons:

  // AC button 
  clear(event) {
    this.value = 0;
    this.formula = "";
  }

  // Operators
  onOperator(event) {
    this.formula += this.value + event.target.value;
    this.value = 0;
  }

  // Calculation of square
  calculateSqr(event) {
    this.value = Math.pow(this.value, 2);
    this.formula += this.value;
  }

  // %
  getPercentage(event) {
    if (this.formula != "") {
      this.value = eval(this.formula.slice(0, -1)) * this.value / 100;
      this.formula += this.value;
    }
  }

  // Changing +/-
  setNegative(event) {
    // allowing to initialize input numbers with negative sign
    if (this.value == 0 || this.value.toString().slice(-1) === ".") {
      this.value = event.target.value;
    }
    // prepending the - sign to the input number
    if (this.value > 0) {
      this.value = event.target.value + this.value
    }
    // changing the input number from negative to positive 
    if (this.value < 0) {
      this.value = Math.abs(this.value);
    }
  }

  addFloatingpoint(event) {
    if (this.value[this.formula.length - 1] !== '.') {
      // this.displayValue(event);
      this.value = this.value + event.target.value;
    }
  }

  // Gives the answer after pressing = sign
  calculate(event) {
    /*This variable is for checking wether the result has been already calculated and if it was added to to formula on the screen */
    let calculated = this.formula.indexOf("=");
    // This line of the code is for avoiding the display of the equality sign and result on screen multiple times
    if (calculated != -1) { return; }
    else {
      this.formula += this.value;
      // Calculating the formula with eval method, the result is displayed on the screen
      this.value = eval(this.formula);
      this.formula += "=" + this.value;
    }
  }
}


