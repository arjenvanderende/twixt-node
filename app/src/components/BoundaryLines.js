import React from 'react';
import { Layer, Line } from 'react-konva';
import { BOARD_SIZE, CELL_MIDDLE, CELL_RADIUS, CELL_SIZE, PLAYER1_COLOR, PLAYER2_COLOR } from '../data/Constants';

const LINE_START = CELL_SIZE;
const LINE_END = CELL_SIZE * (BOARD_SIZE - 1);
const LINE_OFFSET = (CELL_MIDDLE - CELL_RADIUS);

function BoundaryLines(props) {
  return (
    <Layer x={props.x} y={props.y}>
      <Line stroke={PLAYER1_COLOR} points={[ LINE_START + LINE_OFFSET, LINE_START, LINE_END - LINE_OFFSET, LINE_START ]} />
      <Line stroke={PLAYER1_COLOR} points={[ LINE_START + LINE_OFFSET, LINE_END, LINE_END - LINE_OFFSET, LINE_END ]} />
      <Line stroke={PLAYER2_COLOR} points={[ LINE_START, LINE_START + LINE_OFFSET, LINE_START, LINE_END - LINE_OFFSET ]} />
      <Line stroke={PLAYER2_COLOR} points={[ LINE_END, LINE_START + LINE_OFFSET, LINE_END, LINE_END - LINE_OFFSET ]} />
    </Layer>
  );
}

export default BoundaryLines;