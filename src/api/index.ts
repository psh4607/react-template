/********************************************************************************
 * Copyright (c) 2023 {TODO}, Inc. All rights reserved.
 * This software is the confidential and proprietary information of {TODO}, Inc.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Written by {TODO} Team, 2023.
 ******************************************************************************/

import { instance } from '@src/api/setting';
import { AxiosResponse } from 'axios';

interface SampleData {
  data: {
    userId: number;
    name: string;
    email: string;
  };
}

/**
 * 유저 정보 반환 샘플 API
 * @param userId 유저 아이디
 * @returns 유저 정보
 */
export const getUserInfo = async (
  userId: number,
): Promise<AxiosResponse<SampleData>> => {
  const response = await instance.get(`/userId/${userId}`);

  return response.data;
};
