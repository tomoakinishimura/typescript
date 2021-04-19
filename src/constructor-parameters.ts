export {};

class Person {
  constructor(public name: string, public age: number, public height: number) {}
}

let taro = new Person('taro', 30, 160);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['ham', 43, 175];
const ham = new Person(...profile);

type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
