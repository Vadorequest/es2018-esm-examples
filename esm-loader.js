// You can also create another variable, not use "require" specifically, see https://youtu.be/JcZ-FzfDq8A?t=1880
require = require('esm')(module/*, options*/);

// XXX More usages:
// require = require('esm')(module, { await: true });
// require = require('esm')(module, { cjs: false });
// require = require('esm')(module, { mode: 'all' });

module.exports = require('./index.js');
