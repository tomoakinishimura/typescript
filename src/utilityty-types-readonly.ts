export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Hame',
  age: 43,
};

me.age++;

console.log(me);

type PersonnalDataType = Readonly<Profile>;

const friend: PersonnalDataType = {
  name: 'Shigeru',
  age: 40,
};

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
