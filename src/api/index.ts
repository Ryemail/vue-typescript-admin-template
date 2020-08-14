import request from '@/utils/request';
import * as t from '@/types';

// 获取用户信息
export const getUserInfo = (params: t.Home.User) => request.get('/api/getUserInfo', { params });
