export {};

function error(message: string): never {
    throw new Error(message);
}

try {
    let resutl = error('test');
    console.log({resutl});
} catch (error) {
    console.log({error});
}