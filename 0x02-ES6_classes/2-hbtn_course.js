/* eslint-disable */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(data) {
    if (typeof data !== 'string') { throw new TypeError('Name must be a string'); }
    this._name = data;
  }

  get length() {
    return this._length;
  }

  set length(data) {
    if (typeof data !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = data;
  }

  get students() {
    return this._students;
  }

  set students(data) {
    if (!Array.isArray(data)) { throw new TypeError('Students must be an array'); }
    this._students = data;
  }
}
