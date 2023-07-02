/********************************************************************************
 * Copyright (c) 2023 {TODO}, Inc. All rights reserved.
 * This software is the confidential and proprietary information of {TODO}, Inc.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Written by {TODO} Team, 2023.
 ******************************************************************************/

type EnvironmentTypes = 'production' | 'staged' | 'development';

type ApiAddressTypes = {
  development: string | undefined;
  staged: string | undefined;
  production: string | undefined;
};

export const env = <EnvironmentTypes>(
  (process.env.REACT_APP_NODE_ENV
    ? process.env.REACT_APP_NODE_ENV
    : 'development')
);

export const apiAddr: ApiAddressTypes = {
  development: process.env.REACT_APP_API_DEVELOPMENT,
  staged: process.env.REACT_APP_API_STAGED,
  production: process.env.REACT_APP_API_PRODUCTION,
};
