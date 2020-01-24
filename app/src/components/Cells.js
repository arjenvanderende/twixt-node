import React from 'react';
import { Layer } from 'react-konva';
import Cell from './Cell';
import { PLAYER1_COLOR, PLAYER2_COLOR, UNSELECTED_COLOR } from '../data/Constants';
import { boardToPixel } from '../utils/layoutUtils';

// const cellModel = {
//   idx: 0,
//   x: 0,
//   y: 1,
//   player: null
// }

function Cells(props) {
  return (
    <Layer x={props.x} y={props.y}>
      { props.cells.map((cell) =>
        <Cell key={cell.idx}
          x={boardToPixel(cell.x)}
          y={boardToPixel(cell.y)}
          fill={fillColor(cell.player)}
          onClick={() => props.onCellClicked(cell.idx) }
          />
      )}
    </Layer>
  )
}

function fillColor(player) {
  switch (player) {
    case 1: return PLAYER1_COLOR;
    case 2: return PLAYER2_COLOR;
    default: return UNSELECTED_COLOR;
  }
}

export default Cells;