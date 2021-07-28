import { ImgurClient } from 'imgur';
import { IMGUR_CLIENT_ID } from './env';
export default function setupImgur () {
    return new ImgurClient({ accessToken: IMGUR_CLIENT_ID });
}