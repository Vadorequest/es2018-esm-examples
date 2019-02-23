# ES2018 examples using ESM

> This is a minimal example about the different usages of ESM and how it compares to using node directly
> It shows how **easy** it is to use ESM with no additional configuration (webpack, babel, rollup, etc.) 
which is just perfect when you want to get things done fast 
without spending/wasting time configuring all the boilerplate for ES2018 or import/export features!

Basically, this is a showcase of the 2 different usages of [ESM](https://github.com/standard-things/esm)

- through custom `require` (main file loader), see `./esm-loader.js`
- through `node -r esm script.js` which requires `esm` before requiring the `script.js`, and therefore support import/export in node 6+

Note that special stuff like spread operator do require node v8.6.0+, support of such features (ES2018) is not provided by ESM

## Testing it out yourself!

- `yarn run node` will load index.js using `node` and fail due to lack of support of node in any existing version (node 6 to 11)
```bash
yarn run v1.13.0
$ node ./index.js
/Users/vadorequest/dev/es2018-esm-examples/index.js:1
(function (exports, require, module, __filename, __dirname) { import map from 'lodash.map'; // import/export won't work with standard node not loaded through ESM
                                                              ^^^^^^

SyntaxError: Unexpected token import
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:616:28)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

- `yarn run esm-loader` will load index.js through esm-loader.js and fail if node version is <8.6.0, but will work if higher version of node is used
```bash
yarn run v1.13.0
$ node esm-loader.js
1
2
3
{ '0': 4, '1': 5, '2': 6 }
✨  Done in 0.22s.

```

- `yarn run node-with-esm` will load index.js using `node` with esm compatible mode and fail if node version is <8.6.0, but will work if higher version of node is used
```bash
yarn run v1.13.0
$ node -r esm ./index.js
1
2
3
{ '0': 4, '1': 5, '2': 6 }
✨  Done in 0.22s.

```

- `yarn run node-with-esm:watch` will load index.js using `nodemon` with esm compatible mode and fail if node version is <8.6.0, but will work if higher version of node is used
```bash
yarn run v1.13.0
$ nodemon -r esm ./index.js
[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node -r esm ./index.js`
1
2
3
{ '0': 4, '1': 5, '2': 6 }
[nodemon] clean exit - waiting for changes before restart
```

Nodemon is great for scripting/prototyping hence the fact it's in the showcase :)


See `package.json:scripts`.
