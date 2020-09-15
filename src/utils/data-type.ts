// @ts-nocheck
export const isNum = param => Object.prototype.toString.call(param) === '[object Number]';

export const Str = param => Object.prototype.toString.call(param) === '[object String]';

export const Bool = param => Object.prototype.toString.call(param) === '[object Boolean]';

export const Sym = param => Object.prototype.toString.call(param) === '[object Symbol]';

export const Undef = param => Object.prototype.toString.call(param) === '[object Undefined]';

export const isNull = param => Object.prototype.toString.call(param) === '[object Null]';

export const isArr = param => Object.prototype.toString.call(param) === '[object Array]';

export const isFunc = param => Object.prototype.toString.call(param) === '[object Function]';

export const isObj = param => Object.prototype.toString.call(param) === '[object Object]';
