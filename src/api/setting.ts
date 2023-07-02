/********************************************************************************
 * Copyright (c) 2023 {TODO}, Inc. All rights reserved.
 * This software is the confidential and proprietary information of {TODO}, Inc.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Written by {TODO} Team, 2023.
 ******************************************************************************/

import axios from 'axios';
import { apiAddr, env } from '../config';

export const instance = axios.create({
  baseURL: apiAddr[env],
  withCredentials: true,
});
