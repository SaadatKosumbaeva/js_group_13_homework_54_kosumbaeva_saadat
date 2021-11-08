import {Component} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  clicked = false;

  changeClassName() {
    return this.clicked ? 'cell white' : 'cell black';
  }
}
