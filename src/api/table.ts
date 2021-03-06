import request from '@/utils/request';
import { G } from '@/types';

export const fetchList = (params?: G.Limit) => request.get('/api/table/list', { params });
