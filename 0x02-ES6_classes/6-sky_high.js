import Building from './5-building';

export default class SkyHighBiulding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new Error();
    super(sqft);
    this._floors = floors;
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(data) {
    this._sqft = data;
  }

  get floors() {
    return this._floors;
  }

  set floors(data) {
    this._floors = data;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
