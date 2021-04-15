export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

function test<T>(arg: T): T {
  return arg;
}

console.log(echo<number>(30));
console.log(test<string>('hoge'));
console.log(test<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  /**
   * echo
   */
  public echo(): T {
    return this.value;
  }
}

console.log(new Mirror<string>('hoge').echo());
console.log(new Mirror<number>(12345).echo());
