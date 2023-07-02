/********************************************************************************
 * Copyright (c) 2023 {TODO}, Inc. All rights reserved.
 * This software is the confidential and proprietary information of {TODO}, Inc.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Written by {TODO} Team, 2023.
 ******************************************************************************/

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Pretendard;
    }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: white;
      overflow: auto;
      width: 100%;
      height: 100%;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
    
    html {
        width: 100%;
        height: 100%;
        :root {
            font-size: 16px;
        }
    }

    input {
        font-size: 1rem;
        padding: 0px;
    }

    @media (max-width: 380px) {
        html {
            :root {
                font-size: 16px;
            }
        }
    }
`;

export default GlobalStyle;
