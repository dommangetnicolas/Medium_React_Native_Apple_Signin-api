import { Request, Response } from 'express';
import AppleAuth from '../utils/appleAuth';
import User from '../models/User';
import jwt from 'jsonwebtoken';

export const appleAuth = async (req: Request, res: Response) => {
    const { token: appleToken } = req.body;

    try {
        // Get Apple Data from AccessToken
        const apple = await AppleAuth.accessToken(appleToken);
        const appleData = jwt.decode(apple.id_token);

        // Get appleId
        const { sub: appleId } = appleData;

        // Count the number of connections of the user
        const user = await User.findOneAndUpdate(
            { appleId },
            { $inc: { nbOfConnections: 1 } },
            { upsert: true, new: true, useFindAndModify: false }
        );

        // Return the user
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).json({ message: err.message || err });
    }
};
