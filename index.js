import map from 'lodash.map'; // import/export won't work with standard node not loaded through ESM

const a = [1, 2, 3];
map(a, x => console.log(x));
// 1
// 2
// 3

const x = (...rest) => {
  console.log({ ...rest, ...[4, 5, 6] }); // spread operator not supported until node v8.6.0 (will throw "SyntaxError: Unexpected token ...")
};

x(1, 2, 3);
// { '0': 4, '1': 5, '2': 6 }
