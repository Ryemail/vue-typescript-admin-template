export declare namespace G {
    interface Limit {
        limit: number;
        page: number;
    }

    export interface ApiData<T = any> {
        code: number;
        data: T;
        message: string;
    }
}
