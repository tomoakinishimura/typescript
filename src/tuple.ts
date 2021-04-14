export {};

let profile: [string, number] = ['Ham', 43];
// 順序をもたせることが全然できないらしい
// union typesだと製薬がよやわいので、tupleで制約を強めたい
// profile = [43, 'hoge'];