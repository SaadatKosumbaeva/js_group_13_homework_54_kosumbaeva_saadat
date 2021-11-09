import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-control-block',
  templateUrl: './control-block.component.html',
  styleUrls: ['./control-block.component.css']
})
export class ControlBlockComponent {
  @Input() tries = 0;
  @Output() gameReset = new EventEmitter();

  onGameReset() {
    this.gameReset.emit();
  }
}
