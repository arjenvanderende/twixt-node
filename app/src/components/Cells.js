import React from 'react';
import { Group } from 'react-konva';
import Cell from './Cell';
import { boardToPixel, playerColor } from '../utils/drawUtils';

function Cells(props) {
  return (
    <Group>
      { props.cells.map((cell) =>
        <Cell key={cell.idx}
          x={boardToPixel(cell.x)}
          y={boardToPixel(cell.y)}
          fill={playerColor(cell.player)}
          onClick={() => props.onCellClicked(cell.idx) }
          />
      )}
    </Group>
  )
}

export default Cells;