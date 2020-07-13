import AppleAuth from 'apple-auth';
import fs from 'fs';

require('dotenv').config();


const config = {
    client_id: process.env.APPLE_SIGNIN_CLIENT_ID,
    team_id: process.env.APPLE_SIGNIN_TEAM_ID,
    redirect_uri: '',
    key_id: process.env.APPLE_SIGNIN_KEY_ID,
    scope: 'name%20email',
};

const appleAuth = new AppleAuth(
    config,
    fs.readFileSync(`${__dirname}/../config/AuthKey.p8`).toString(),
    'text'
);

export default appleAuth;
