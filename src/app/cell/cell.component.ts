import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() text = '';
  @Output() cellClick = new EventEmitter();
  clicked = false;

  changeClassName() {
    return this.clicked ? 'cell white' : 'cell black';
  }

  onCellClick() {
    this.clicked = !this.clicked;
    this.cellClick.emit();
  }
}
