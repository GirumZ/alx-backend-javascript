export default function getStudentIdsSum(myArray) {
  if (!Array.isArray(myArray)) return [];
  return myArray.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
