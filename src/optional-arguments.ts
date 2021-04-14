export {};

let bmi = (height: number, weight: number, printable?: boolean ): number => {
    const bmi = weight / (height * height)
    console.log(printable);
    return bmi;
};

bmi(1.73, 68);