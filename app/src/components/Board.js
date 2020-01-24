import React from 'react';
import { Stage } from 'react-konva';
import BoundaryLines from './BoundaryLines';
import Cells from './Cells';
import ColumnLabels from './ColumnLabels';
import HelperLines from './HelperLines';
import RowLabels from './RowLabels';
import { BOARD_SIZE, CELL_RADIUS, CELL_SIZE } from '../data/Constants';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(BOARD_SIZE * BOARD_SIZE).fill(null),
      isPlayer1Turn: true,
    }
  }

  handleCellClicked(i) {
    const cells = this.state.cells.slice();
    if (cells[i]) {
      // cannot select already claimed cells
      return;
    }

    cells[i] = this.state.isPlayer1Turn ? 'R' : 'B';
    this.setState({
      cells: cells,
      isPlayer1Turn: !this.state.isPlayer1Turn,
    });
  }

  render() {
    const cells = this.state.cells
      .map((v, i) => {
        const x = i % BOARD_SIZE;
        const y = Math.floor(i / BOARD_SIZE);
        const player =
          v === 'R' ? 1 :
          v === 'B' ? 2 : null;
        const isFirstOrLastColumn = x === 0 || x === BOARD_SIZE - 1;
        const isFirstOrLastRow = y === 0 || y === BOARD_SIZE - 1;
        return {
          idx: i,
          x, y,
          player,
          isCorner: isFirstOrLastColumn && isFirstOrLastRow,
        };
      })
      .filter((cell) => !cell.isCorner);

    return (
      <Stage width={CELL_SIZE*BOARD_SIZE+CELL_SIZE} height={CELL_SIZE*BOARD_SIZE+CELL_SIZE}>
        <ColumnLabels x={CELL_SIZE+CELL_RADIUS} y={CELL_RADIUS} />
        <RowLabels x={CELL_RADIUS} y={CELL_SIZE+CELL_RADIUS} />
        <HelperLines x={CELL_SIZE} y={CELL_SIZE} />
        <BoundaryLines x={CELL_SIZE} y={CELL_SIZE} />
        <Cells x={CELL_SIZE} y={CELL_SIZE} cells={cells} onCellClicked={(idx) => this.handleCellClicked(idx)} />
      </Stage>
    );
  }
}

export default Board;