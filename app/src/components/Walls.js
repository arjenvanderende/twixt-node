import React from 'react';
import { Group, Line } from 'react-konva';
import { boardToPixel, playerColor } from '../utils/drawUtils'

function Walls(props) {
  return (
    <Group>
      {props.walls.map((wall, i) =>
        <Line key={i}
          points={[
            boardToPixel(wall.start.x),
            boardToPixel(wall.start.y),
            boardToPixel(wall.end.x),
            boardToPixel(wall.end.y),
          ]}
          stroke={playerColor(wall.player)}
          />
      )}
    </Group>
  );
}

export default Walls;