const arrayA = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];
const arrayB = [1, 2, 30, 4, 5, 6, 7, 8, 9, 15];

const createArray = (fistArray, secondArray) => {
  return fistArray.map((item, index) => {
    if (item !== secondArray[index]) {
      return 1 / (item - secondArray[index]);
    } else {
      return 1;
    }
  });
};

const transformArray = (array) => {
  return [
    array[array.length - 1],
    ...array.slice(1, array.length - 1),
    array[0],
  ];
};

const arrayC = createArray(arrayA, arrayB);

console.log("initial array C - ", arrayC);

const arrayCAfterTransform = transformArray(arrayC);

console.log("array C after transformation - ", arrayCAfterTransform);

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
};

const sortedArrayC = bubbleSort(arrayCAfterTransform);

console.log("sorted array C - ", sortedArrayC);
