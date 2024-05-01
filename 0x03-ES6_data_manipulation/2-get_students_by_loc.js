export default function getStudentsByLocation(myArray, city) {
  if (!Array.isArray(myArray)) return [];
  return myArray.filter((element) => element.location === city);
}
