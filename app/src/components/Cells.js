import React from 'react';
import { Layer } from 'react-konva';
import Cell from './Cell';
import { boardToPixel, playerColor } from '../utils/drawUtils';

function Cells(props) {
  return (
    <Layer x={props.x} y={props.y}>
      { props.cells.map((cell) =>
        <Cell key={cell.idx}
          x={boardToPixel(cell.x)}
          y={boardToPixel(cell.y)}
          fill={playerColor(cell.player)}
          onClick={() => props.onCellClicked(cell.idx) }
          />
      )}
    </Layer>
  )
}

export default Cells;