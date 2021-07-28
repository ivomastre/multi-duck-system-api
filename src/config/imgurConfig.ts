import { ImgurClient } from 'imgur';
import { IMGUR_ACCESS_TOKEN } from './env';
export default function setupImgur () {
    return new ImgurClient({ accessToken: IMGUR_ACCESS_TOKEN });
}