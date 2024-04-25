export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(data) {
    this._code = data;
  }

  get name() {
    return this._name;
  }

  set name(data) {
    this._name = data;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
