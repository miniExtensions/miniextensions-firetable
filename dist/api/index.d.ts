import { FireTableAPIRoute, ExecuteApiRequestResult } from './types';
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
export declare const executeApiRequest: <Input extends object, Output>(args: Args<Input>) => Promise<ExecuteApiRequestResult<Output>>;
export {};
//# sourceMappingURL=index.d.ts.map