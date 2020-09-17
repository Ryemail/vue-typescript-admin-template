// @ts-nocheck
export const isString = obj => {
    return Object.prototype.toString.call(obj) === '[object String]';
};

export const isNumber = obj => {
    return Object.prototype.toString.call(obj) === '[object Number]';
};

export const isObject = obj => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

export const isArray = obj => {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

export const isFunction = functionToCheck => {
    const getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

export const isDefined = val => {
    return val === void 0 || val === null;
};
