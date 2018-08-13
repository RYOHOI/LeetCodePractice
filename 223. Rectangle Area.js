/* Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area
Assume that the total area is never beyond the maximum possible value of int. */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  let verticalLine = [A, C, E, G]
  let horizontalLine = [B, D, F, H]
  let area1 = countArea([A, B], [C, D]),
    area2 = countArea([E, F], [G, H])
  let type = ''
  if (
    (E >= A && G <= C && F >= B && H <= D) ||
    (A >= E && C <= G && B >= F && D <= H)
  ) {
    type = 'contain'
  } else if (E > C || A > G || B > H || D < F) {
    type = 'split'
  }
  switch (type) {
    case 'contain':
      if (area1 < area2) {
        return area2
      } else {
        return area1
      }
    case 'split':
      return area1 + area2
    default:
      verticalLine.sort((a, b) => a - b)
      horizontalLine.sort((a, b) => a - b)
      let overlapArea =
        (horizontalLine[2] - horizontalLine[1]) *
        (verticalLine[2] - verticalLine[1])
      return area1 + area2 - overlapArea
      break
  }

  function countArea(corner1, corner2) {
    return Math.abs(corner1[0] - corner2[0]) * Math.abs(corner1[1] - corner2[1])
  }
}
