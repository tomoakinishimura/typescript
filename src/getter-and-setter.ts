export {};

class MyNumberCard {
  constructor(private _owner: string, private _secretNumber: number) {}

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('tomo', 123456789);
// card.owner = 'hoge';

card.secretNumber = 999999999;
console.log(card.debugPrint());

card.secretNumber = 777777777777;
console.log(card.debugPrint());
