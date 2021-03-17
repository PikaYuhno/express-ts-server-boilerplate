import {v4} from 'uuid';
import {Redis} from 'ioredis';
import {FORGOT_PW_PREFIX} from '../constants';

export const genForgotPasswordLink = async (url: string, userId: string, redis: Redis) => {
    const id = v4();
    await redis.set(`${FORGOT_PW_PREFIX}${id}`, userId, "EX", 60 * 20);
    return `${url}/auth/reset/password/${id}`;
}
