import React from 'react';
import { Circle } from 'react-konva';
import { CELL_RADIUS } from '../data/Constants';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  render() {
    return <Circle
      x={this.props.x}
      y={this.props.y}
      stroke={this.state.hover ? 'black' : '#ddd'}
      strokeWidth={1}
      fill={this.props.fill}
      radius={CELL_RADIUS}
      onMouseEnter={() => this.setState({ hover: true })}
      onMouseLeave={() => this.setState({ hover: false })}
      onClick={this.props.onClick}
    />;
  }
}

export default Cell;