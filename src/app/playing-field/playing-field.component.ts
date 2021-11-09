import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})
export class PlayingFieldComponent implements OnInit {
  cells: {hasItem: boolean, text: string}[] = [];
  randomIndex = Math.floor(Math.random() * 36);

  ngOnInit(): void {
    for (let i = 0; i < 36; i++) {
      this.cells.push({hasItem: false, text: ''});
    }
  }

  pushText(index: number) {
    if (index === this.randomIndex) {
      this.cells[this.randomIndex].hasItem = true;
      this.cells[this.randomIndex].text = 'o';
    }
  }
}
