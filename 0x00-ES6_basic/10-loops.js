export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const elm of array) {
    newArray.push(appendString + array[array.indexOf(elm)]);
  }

  return newArray;
}
