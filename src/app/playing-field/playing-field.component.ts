import {Component} from '@angular/core';
import {GameField} from "../../lib/GameField";

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})

export class PlayingFieldComponent {
  cells: GameField;
  randomIndex = Math.floor(Math.random() * 36);
  tries = 0;
  found = false;

  constructor() {
    this.cells = new GameField;
  }

  pushText(index: number) {
    if (index === this.randomIndex) {
      this.cells.cells[this.randomIndex].hasItem = true;
      this.cells.cells[this.randomIndex].text = 'o';
    }
  }

  countTries(index: number) {
    if (index === this.randomIndex) {
      this.found = true;
    }
    this.tries ++;
    this.found = false;
  }

  resetGame() {
    this.cells = new GameField();
    console.log('reset');
  }
}
