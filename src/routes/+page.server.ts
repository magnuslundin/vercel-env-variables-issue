import type { PageServerLoad } from './$types';
import { verifyToken } from "$lib/authentication";

import { 
  PUBLIC_KEY,
  PUBLIC_TOKEN,
} from '$env/static/public';

export const load = (async () => {
  const token = PUBLIC_TOKEN;
  return {
    token,
    publicKey: PUBLIC_KEY,
    tokenVerifiedWithoutEscapeHandling: verifyToken(token, false),
    tokenVerifiedWithEscapeHandling: verifyToken(token, true),
  }
}) satisfies PageServerLoad;
