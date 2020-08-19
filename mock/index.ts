// @ts-nocheck

import Mock from 'mockjs';
import table from './table';
import { param2Obj } from './utils';

const mocks = [...table];

function XHR2ExpressReqWrap(respond) {
    return function(options) {
        let result = null;
        if (respond instanceof Function) {
            const { body, type, url } = options;
            result = respond({
                method: type,
                body: JSON.parse(body),
                query: param2Obj(url),
            });
        } else {
            result = respond;
        }
        return Mock.mock(result);
    };
}

for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response));
}
