import { CELL_SIZE, CELL_MIDDLE, PLAYER1_COLOR, PLAYER2_COLOR, UNSELECTED_COLOR } from '../data/Constants';

/**
 * Converts a cell coordinate to a canvas/screen pixel coordinate
 * @param {number} offset The cell coordinate
 */
export function boardToPixel(offset) {
  return offset * CELL_SIZE + CELL_MIDDLE;
}

/**
 * Returns the color used for the specified player
 * @param {number} player The player number
 */
export function playerColor(player) {
  switch (player) {
    case 1: return PLAYER1_COLOR;
    case 2: return PLAYER2_COLOR;
    default: return UNSELECTED_COLOR;
  }
}
