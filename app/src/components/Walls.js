import React from 'react';
import { Layer, Line } from 'react-konva';
import { boardToPixel, playerColor } from '../utils/drawUtils'

function Walls(props) {
  return (
    <Layer x={props.x} y={props.y}>
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
    </Layer>
  );
}

export default Walls;