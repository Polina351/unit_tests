function average(array) {
  const sumElements = array.reduce((accum, elem) => accum + elem);
  return Math.round((sumElements / array.length) * 100) / 100;
}

function compareArraysByAverage(array1, array2) {
  const averageArray1 = average(array1);
  const averageArray2 = average(array2);
  let result = '';
  if (averageArray1 > averageArray2) {
    result = 'Первый список имеет большее среднее значение';
  } else if (averageArray1 < averageArray2) {
    result = 'Второй список имеет большее среднее значение';
  } else {
    result = 'Средние значения равны';
  }
  return result;
}

module.exports = {
  average,
  compareArraysByAverage,
};
