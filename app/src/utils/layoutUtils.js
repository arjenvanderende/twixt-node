import { CELL_SIZE, CELL_MIDDLE } from '../data/Constants';

/**
 * Convert a cell coordinate to a canvas/screen pixel coordinate
 * @param {number} offset The cell coordinate
 */
export function boardToPixel(offset) {
  return offset * CELL_SIZE + CELL_MIDDLE;
}
