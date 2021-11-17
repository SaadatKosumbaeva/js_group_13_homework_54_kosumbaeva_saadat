import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() text = '';
  @Input() itemFound = false;
  @Output() cellClick = new EventEmitter();
  clicked = false;

  changeClassName() {
    if (this.itemFound) {
      return 'cell grey';
    } else {
      return this.clicked ? 'cell white' : 'cell black';
    }
  }

  onCellClick() {
    if (this.clicked) {
      return;
    } else {
      this.clicked = true;
      this.cellClick.emit(this.clicked);
    }
  }
}
