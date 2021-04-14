export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const barString: Mojiretsu = 'World';

const example1 = {
    name: 'tomo',
    age: 31
};

type Profile = {
    name: string,
    age: number
};

const example2: Profile = {
    name: 'tomo',
    age: 31
};

type Profile2 = typeof example1;