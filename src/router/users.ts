import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner  } from '../middleware';


export default(router: express.Router)  => {
    router.get('/api/v1/users', isAuthenticated, getAllUsers);
    router.delete('/api/v1/users/:id', isAuthenticated, isOwner, deleteUser );
    router.patch('/api/v1/users/:id', isAuthenticated, isOwner, updateUser );
}