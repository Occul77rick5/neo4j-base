import { getUserByEmail,createUser } from '../db/users';
import express from 'express';
import {authentication, random} from '../helpers'
import logger from '../logging/logger';


export const login = async (req: any, res: any) => {
    
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.sendStatus(400).json({
                error: "User Login Error exists"
            }); 
        }

        const user = (await getUserByEmail(email).select('+authentication.salt +authentication.password'));

        if(!user){
            return res.sendStatus(400);
        }

        const expectedHash = authentication(user.authentication.salt, password);

        if(user.authentication.password !== expectedHash){
            
            logger.info("Authentication Failed: " + email);
            return res.sendStatus(403);
        }

        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());
        
        await user.save();       

        res.cookie(process.env.COOKIE_NAME, user.authentication.sessionToken, {domain: 'localhost', path: '/'});

        return res.status(200).json(user).end();

    }catch (e) {
        logger.error(e);
        return res.status(400).json({error: e.message});
    }

}


export const register = async(req: express.Request, res: express.Response) => {
    try{
        
        const {email, password, username} = req.body;

        if(!email ||!password ||!username){
            return res.status(400).json({ 
                error: "Missing required fields"
            });
        }

        const existingUser = await getUserByEmail(email);

        if(existingUser){
            return res.status(400).json({
                            error: "User already exists"
            }); 
        }

        const salt = random();

        const user = await createUser({
            email,
            username,
            authentication:{
                salt,
                password: authentication (salt, password),
            }
        });
        return res.status(200).json(user).end();

    }catch(e){
        logger.error(e)
        return res.sendStatus(400);
    }
};