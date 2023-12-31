import axios from 'axios';
import { FireTableAPIRoute, ExecuteApiRequestResult } from './types';
import { getState } from '../state';

interface CommonArgs {
    route: FireTableAPIRoute;
}

interface POSTArgs<Input> extends CommonArgs {
    method?: 'POST';
    body: Input;
}

interface GETArgs<Input> extends CommonArgs {
    method: 'GET';
    queryParams: Input;
}

type Args<Input> = POSTArgs<Input> | GETArgs<Input>;

export const executeApiRequest = async <Input extends object, Output>(
    args: Args<Input>
): Promise<ExecuteApiRequestResult<Output>> => {
    try {
        const input: Input =
            args.method === 'GET' ? args.queryParams : args.body;

        const baseUrl = getState().baseUrl;

        const url = `${baseUrl}/api/firetable/v1?route=${encodeURIComponent(
            args.route
        )}${
            args.method === 'GET' && Object.keys(args.queryParams).length > 0
                ? '&executeApiRequestQueryParams=' +
                  encodeURIComponent(JSON.stringify(args.queryParams))
                : ''
        }`;

        const methodPart =
            !args.method || args.method === 'POST'
                ? {
                      method: args.method ?? 'POST',
                      data: input,
                  }
                : {
                      method: args.method ?? 'GET',
                  };

        const response = await axios({
            ...methodPart,
            url,
            headers: {
                'Content-Type': 'text/plain',
            },
        });

        if (response != null && response.status === 200) {
            const data = response.data;

            if (data.error === true) {
                throw new Error(data.message);
            } else {
                return {
                    type: 'success',
                    data,
                };
            }
        } else {
            throw new Error('Request failed. Please try again.');
        }
    } catch (e) {
        return {
            type: 'error',
            message: e.message,
        };
    }
};
