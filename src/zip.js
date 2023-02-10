function zip(...arrays) {
  const maxLength = Math.max(...arrays.map((array) => array.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, j) => arrays[j][i]);
  });
}

// Define the arrays that contain the coordinates
const xCoordinates = [1, 2, 3, 4];
const yCoordinates = [5, 6, 7, 8];
const zCoordinates = [3, 6, 1, 7];

// Create a zipped array of points
const points = zip(xCoordinates, yCoordinates, zCoordinates);

// Use the zipped array of points
console.log(points); // [[1, 5, 3], [2, 6, 6], [3, 7, 1], [4, 8, 7]]
