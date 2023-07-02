/********************************************************************************
 * Copyright (c) 2023 {TODO}, Inc. All rights reserved.
 * This software is the confidential and proprietary information of {TODO}, Inc.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Written by {TODO} Team, 2023.
 ******************************************************************************/

const path = require('path');
const cwd = process.cwd();

/**
 * Are we in development mode?
 */
function inDev() {
  return process.env.NODE_ENV == 'development';
}

/**
 * Create webpack aliases
 */
function createWebpackAliases(aliases) {
  const result = {};
  for (const name in aliases) {
    result[name] = path.join(cwd, aliases[name]);
  }
  return result;
}

// Export helpers
module.exports = {
  inDev,
  createWebpackAliases,
};
