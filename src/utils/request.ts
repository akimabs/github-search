import axios, { AxiosResponse } from 'axios';
import { BaseRequest, ResultType } from 'types';
import { env } from 'env';

/**
 * Request helper for HTTPRequest
 * @param params must receive Object
 * @param id must receive String or Number
 * @param headers must receive Object
 * @param body must receive Object
 * @param method from AxiosMethod type
 * @param endpoint must receive Endpoint type
 * and must return
 * @returns { ResultType }
 */

export const request = async ({
  params,
  id,
  headers,
  body,
  endpoint,
  method,
}: BaseRequest): Promise<ResultType> => {
  try {
    const res: AxiosResponse = await axios({
      url: `${env.BASE_URL}${endpoint}/` + id,
      method,
      data: body,
      headers,
      params,
    });

    const resultSuccess: ResultType = {
      status: 'success',
      status_code: res.status,
      data: res.data,
    };

    return resultSuccess;
    //End of schema success
  } catch ({ response }: any) {
    const resError: AxiosResponse | any = response;
    const resultError: ResultType = {
      status: 'error',
      status_code: resError.status,
      data: resError.data?.data,
    };
    console.warn(resError);

    return resultError;
    //End of schema error
  }
};
