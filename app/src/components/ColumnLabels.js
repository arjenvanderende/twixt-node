import React from 'react';
import { BOARD_SIZE, CELL_SIZE } from '../data/Constants';
import { Layer, Text } from 'react-konva';

const labels = Array(BOARD_SIZE).fill(null).map((_, i) => String.fromCharCode(i + 65));

function ColumnLabels(props) {
  return (
    <Layer x={props.x} y={props.y}>
      { labels.map((text, i) => 
        <Text key={i}
          x={i * CELL_SIZE} y={0}
          text={text}
          fontStyle={'bold'}
          fill={'#888'}
          />
      )}
    </Layer>
  );
}

export default ColumnLabels;