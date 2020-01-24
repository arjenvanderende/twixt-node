import React from 'react';
import { BOARD_SIZE, CELL_SIZE } from '../data/Constants';
import { Group, Text } from 'react-konva';

const labels = Array(BOARD_SIZE).fill(null).map((_, i) => String.fromCharCode(i + 65));

function ColumnLabels(props) {
  return (
    <Group>
      { labels.map((text, i) => 
        <Text key={i}
          x={(i + 1) * CELL_SIZE} y={0}
          text={text}
          fontStyle={'bold'}
          fill={'#888'}
          />
      )}
    </Group>
  );
}

export default ColumnLabels;