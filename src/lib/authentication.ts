import jwt from 'jsonwebtoken';

import { 
  PUBLIC_KEY,
} from '$env/static/public';

export function verify<T>(token: string, secret: string, handleEscapedNewlines=false): SuccessResponse<T> | ErrorResponse {
  let data;

  let scopedSecret = secret;
  if (handleEscapedNewlines) {
    // Since env variables in Vercel are escaped is this required when deployed
    scopedSecret = scopedSecret.replace(/\\n/g, '\n');
  }

  try {
    data = jwt.verify(token, scopedSecret, { algorithms: ['RS256'] }) as T;
  } catch (error) {
    return [null, JSON.stringify(error)];
  }
  return [data, null]
}

export function verifyToken(token: string, handleEscapedNewlines=false) {
  return verify<Record<string, string>>(token, PUBLIC_KEY, handleEscapedNewlines);
}
