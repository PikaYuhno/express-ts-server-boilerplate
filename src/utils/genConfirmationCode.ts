import redisClient from '../db/redis';
import {CONFIRMATION_CODE_PREFIX} from '../constants';

export const genConfirmationCode = async (userId: number): Promise<string> => {
    const code = generateCode();
    await redisClient.set(`${CONFIRMATION_CODE_PREFIX}${code}`, userId.toString(), "EX", 60 * 60 * 24);
    return code;
}

const generateCode = () => {
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += Math.floor(10 * Math.random())
    }
    return code;
}
