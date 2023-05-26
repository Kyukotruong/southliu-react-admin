import type { ServerResult } from '#/public';
import { request } from '@/utils/request';

enum API {
  URL = '/platform/game',
  COMMON_URL = '/authority/common',
}

interface Result {
  id: string;
  name: string;
  children?: Result[];
}

/**
 * 获取游戏数据
 * @param data - 请求数据
 */
export function getGames(data?: unknown) {
  return request.get<ServerResult<Result[]>>(
    `${API.COMMON_URL}/games`,
    { params: data }
  );
}
