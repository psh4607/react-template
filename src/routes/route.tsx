/********************************************************************************
 * Copyright (c) 2023 {TODO}, Inc. All rights reserved.
 * This software is the confidential and proprietary information of {TODO}, Inc.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Written by {TODO} Team, 2023.
 ******************************************************************************/

import { createBrowserRouter } from 'react-router-dom';

import App from '@src/App';

export const router = createBrowserRouter([
  {
    children: [
      {
        path: '/*',
        element: <App />,
      },
    ],
  },
]);
