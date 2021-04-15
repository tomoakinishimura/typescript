export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  constructor(public name: string, public speed: number) {
    super(name);
  }

  run(): string {
    return `I can run ${this.speed}km.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 99).run());
