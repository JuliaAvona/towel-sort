
// You should implement your task here.


module.exports = function towelSort(matrix) {
  if (matrix == undefined) {
    return [];
  }

  let newArr = [];
  let sortArr = [];
  
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        newArr.push(matrix[i]);
      } else {
        let reverse = matrix[i].reverse();
        newArr.push(reverse);
      }
  }

      for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            sortArr.push(newArr[i][j]);
        }
    }
  
  return sortArr;
};
