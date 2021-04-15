export {};

namespace Japanese {
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middlerName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Person('tomo');
console.log(me.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
