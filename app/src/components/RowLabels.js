import React from 'react';
import { BOARD_SIZE, CELL_SIZE } from '../data/Constants';
import { Layer, Text } from 'react-konva';

const labels = Array(BOARD_SIZE).fill(null).map((_, i) => i + 1);

function RowLabels(props) {
  return (
    <Layer x={props.x} y={props.y}>
      { labels.map((text, i) => 
        <Text key={i}
          x={0} y={i * CELL_SIZE}
          text={text}
          fontStyle={'bold'}
          fill={'#888'}
          />
      )}
    </Layer>
  );
}

export default RowLabels;