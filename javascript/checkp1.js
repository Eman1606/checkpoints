
function minMax(arr) {
  // Trouver la valeur minimale dans le tableau
  const min = Math.min(...arr);
  // Trouver la valeur maximale dans le tableau
  const max = Math.max(...arr);
  // Retourner un tableau avec min et max
  return [min, max];
}
// exemple
console.log(minMax([1, 2, 3, 4, 5]));   // [1, 5]
console.log(minMax([2334454, 5]));      // [5, 2334454]
console.log(minMax([1]));                // [1, 1]
