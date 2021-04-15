export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

enum Nationality {
  Japan = 'Japan',
}

class Andoroid extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: nothing, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, Nationality.Japan);
console.log(taro.name);
console.log(taro.profile());

let robots = new Andoroid('Robot', 100000, Nationality.Japan);
console.log(robots.profile());
