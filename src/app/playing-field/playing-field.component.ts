import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})
export class PlayingFieldComponent implements OnInit {
  cells: { text: string }[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 36; i++) {
      this.cells.push({text: ''});
    }

    const randomIndex = Math.floor(Math.random() * this.cells.length);
    this.cells[randomIndex].text = 'o';
  }
}
