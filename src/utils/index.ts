import Vue from 'vue';

import * as date from './date';
import * as _types from './types';
import _reg from './reg';
import request from './request';
import { result } from './result';
import { modal } from './modal';

export { date, request, _types, _reg, result, modal };

Vue.prototype.$result = result;

Vue.prototype.$modal = modal;
