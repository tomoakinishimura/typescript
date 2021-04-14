export {};

enum Months {
    January = 1,
    Febrary,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December
};

console.log(Months.January);
console.log(Months.Febrary);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000'
};

let green = COLORS.GREEN;
console.log({green});