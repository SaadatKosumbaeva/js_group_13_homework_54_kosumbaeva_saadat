export class GameField {
  cells: {hasItem: boolean, text: string}[] = [];
  constructor() {
    for (let i = 0; i < 36; i++) {
      this.cells.push({hasItem: false, text: ''});
    }
  }
}
