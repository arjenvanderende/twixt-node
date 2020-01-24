import React from 'react';
import { Stage, Layer } from 'react-konva';
import BoundaryLines from './BoundaryLines';
import Cells from './Cells';
import ColumnLabels from './ColumnLabels';
import HelperLines from './HelperLines';
import RowLabels from './RowLabels';
import Walls from './Walls';
import { BOARD_SIZE, CELL_RADIUS, CELL_SIZE } from '../data/Constants';

const WALL_OFFSETS = [
  -2 * BOARD_SIZE - 1,
  -2 * BOARD_SIZE + 1,
  -BOARD_SIZE - 2,
  -BOARD_SIZE + 2,
  BOARD_SIZE - 2,
  BOARD_SIZE + 2,
  2 * BOARD_SIZE - 1,
  2 * BOARD_SIZE + 1,
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(BOARD_SIZE * BOARD_SIZE).fill(null),
      walls: [],
      isPlayer1Turn: true,
    }
  }

  handleCellClicked(i) {
    if (this.state.cells[i]) {
      // cannot select already claimed cells
      return;
    }

    // claim cell
    const cells = this.state.cells.slice();
    cells[i] = this.state.isPlayer1Turn ? 1 : 2;

    // build walls
    const newWalls = WALL_OFFSETS
      // cell index for possible wall
      .map((o) => i + o)
      // remove cells that are out-of-bounds
      .filter((o) => o >= 0 || o < BOARD_SIZE * BOARD_SIZE)
      // remove cells that do not belong to the current player
      .filter((o) => cells[o] === cells[i])
      // TODO: remove blocked walls
      .map((o) => ({
        start: cellIndexToBoardCoord(i),
        end: cellIndexToBoardCoord(o),
        player: cells[i],
      }));
    const walls = newWalls.length === 0
      ? this.state.walls
      : this.state.walls.slice().concat(newWalls);

    // continue with next player
    this.setState({
      cells: cells,
      walls: walls,
      isPlayer1Turn: !this.state.isPlayer1Turn,
    });
  }

  render() {
    const cells = this.state.cells
      .map((player, idx) => {
        const { x, y } = cellIndexToBoardCoord(idx);
        const isFirstOrLastColumn = x === 0 || x === BOARD_SIZE - 1;
        const isFirstOrLastRow = y === 0 || y === BOARD_SIZE - 1;
        return {
          idx: idx,
          x, y,
          player,
          isCorner: isFirstOrLastColumn && isFirstOrLastRow,
        };
      })
      .filter((cell) => !cell.isCorner);

    return (
      <Stage width={CELL_SIZE*BOARD_SIZE+CELL_SIZE} height={CELL_SIZE*BOARD_SIZE+CELL_SIZE}>
        <Layer x={CELL_RADIUS} y={CELL_RADIUS}>
          <ColumnLabels />
          <RowLabels />
        </Layer>
        <Layer x={CELL_SIZE} y={CELL_SIZE}>
          <HelperLines />
          <BoundaryLines />
          <Walls
            walls={this.state.walls}
            />
          <Cells
            cells={cells}
            onCellClicked={(idx) => this.handleCellClicked(idx)}
            />
        </Layer>
      </Stage>
    );
  }
}

/**
 * Converts a cell index to the {x, y} board coordinate
 * @param {object} idx The x and y board coordinate of the cell
 */
function cellIndexToBoardCoord(idx) {
  return {
    x: idx % BOARD_SIZE,
    y: Math.floor(idx / BOARD_SIZE),
  };
}

export default Board;