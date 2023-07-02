/**
 * Copyright {TODO}.
 *
 * This source code is licensed under the WTFPL license found in the
 * LICENSE file in the root of this projects source tree.
 */

const { createWebpackAliases } = require('./webpack.helpers');

/**
 * Export Webpack Aliases
 *
 * Tip: Some text editors will show the errors or invalid intellisense reports
 * based on these webpack aliases, make sure to update `tsconfig.json` file also
 * to match the `paths` we using in here for aliases in project.
 */
module.exports = createWebpackAliases({
  '@public': 'public',
  '@src': 'src',
});
