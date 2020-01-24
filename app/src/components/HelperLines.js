import React from 'react';
import { Layer, Line } from 'react-konva';
import { BOARD_SIZE } from '../data/Constants';
import { boardToPixel } from '../utils/layoutUtils';

const HELPER_LINE_POINTS = (function() {
  const LAST_CELL = BOARD_SIZE - 1;
  const DIAGONAL_MIDDLE = (BOARD_SIZE / 2) - 1;
  const DIAGONAL_START_OFFSET = 1;
  const DIAGONAL_END_OFFSET = 2;

  return [
    // upper left
    [DIAGONAL_START_OFFSET, DIAGONAL_START_OFFSET, DIAGONAL_MIDDLE, LAST_CELL - DIAGONAL_END_OFFSET],
    [DIAGONAL_START_OFFSET, DIAGONAL_START_OFFSET, LAST_CELL - DIAGONAL_END_OFFSET, DIAGONAL_MIDDLE],
    // upper right
    [LAST_CELL - DIAGONAL_START_OFFSET, DIAGONAL_START_OFFSET, LAST_CELL - DIAGONAL_MIDDLE, LAST_CELL - DIAGONAL_END_OFFSET],
    [LAST_CELL - DIAGONAL_START_OFFSET, DIAGONAL_START_OFFSET, DIAGONAL_END_OFFSET, DIAGONAL_MIDDLE],
    // lower left
    [DIAGONAL_START_OFFSET, LAST_CELL - DIAGONAL_START_OFFSET, DIAGONAL_MIDDLE, DIAGONAL_END_OFFSET],
    [DIAGONAL_START_OFFSET, LAST_CELL - DIAGONAL_START_OFFSET, LAST_CELL - DIAGONAL_END_OFFSET, LAST_CELL - DIAGONAL_MIDDLE],
    // lower right
    [LAST_CELL - DIAGONAL_START_OFFSET, LAST_CELL - DIAGONAL_START_OFFSET, LAST_CELL - DIAGONAL_MIDDLE, DIAGONAL_END_OFFSET],
    [LAST_CELL - DIAGONAL_START_OFFSET, LAST_CELL - DIAGONAL_START_OFFSET, DIAGONAL_END_OFFSET, LAST_CELL - DIAGONAL_MIDDLE],
  ].map((points) => points.map(boardToPixel));
})();


function HelperLines(props) {
  return (
    <Layer x={props.x} y={props.y}>
      {HELPER_LINE_POINTS.map((points, i) => (
        <Line key={i}
          points={points}
          stroke={'#888'}
          strokeWidth={1}
          />
      ))}
    </Layer>
  );
}

export default HelperLines;