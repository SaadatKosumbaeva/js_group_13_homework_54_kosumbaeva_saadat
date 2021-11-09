import {Component} from '@angular/core';
import {GameField} from "../../lib/GameField";

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})

export class PlayingFieldComponent {
  cells: GameField;
  tries = 0;
  found = false;

  constructor() {
    this.cells = new GameField;
  }

  pushText(index: number, clicked: boolean) {
    if (index === this.cells.randomIndex) {
      this.cells.cells[this.cells.randomIndex].hasItem = true;
      this.cells.cells[this.cells.randomIndex].text = 'o';
      this.found = true;
    }

    if (!clicked) {
      return;
    } else {
      this.tries++;
    }
  }

  resetGame() {
    this.cells = new GameField();
    console.log(this.cells);
    this.tries = 0;
    this.found = false;
  }
}
