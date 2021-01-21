
exports.min = function min (array = '') {
    if (array == '') {
      return 0;
    };
    let newArr = array;
    let lowElem = newArr[0];
   
    for (i = 1; i < newArr.length; i++) {
     if (lowElem > newArr[i]) {
        lowElem = newArr[i];
      }; 
    };
  
    return lowElem;
}

exports.max = function max (array = '') {
  if (array == '') {
    return 0;
  };
  let newArr = array;
  let higElem = newArr[0];
 
  for (i = 1; i < newArr.length; i++) {
   if (higElem < newArr[i]) {
    higElem = newArr[i];
    }; 
  };

  return higElem;
}

exports.avg = function avg (array = '') {
  if (array == '') {
    return 0;
  };
  let newArr = array;
  let sumOfArr = (sum, currentValue) => sum + currentValue;
  let average = (newArr.reduce(sumOfArr))/newArr.length;
  return average;
}
