import express from 'express';
import { isAuthenticated, isOwner  } from '../middleware';
import { sessionTest, testConnection } from '../controllers/neo4j';


export default(router: express.Router)  => {
    router.get('/api/v1/neo4jTest', testConnection);
    router.get('/api/v1/sessionTest', sessionTest);
}