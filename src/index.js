
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = [];
  if (matrix != undefined) {
    matrix.forEach((el) => {
      if (matrix.indexOf(el)%2 == 0) {
        el.forEach(element => {
          console.log(element);
          arr.push(element);  
        });
      } else {
        el.reverse().forEach(element => {
          arr.push(element); 
        });
      }
    });
  }
  return arr;
};