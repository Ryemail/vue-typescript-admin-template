import request from '@/utils/request';
import { _G } from '@/types';

export const fetchList = (params?: _G.Limit) => request.get('/vue-element-admin/article/list', { params });
