import express from 'express';
import authentication from './authentication';
import users from './users';
import neo4j from './neo4j';

const router = express.Router()

export default (): express.Router => {
    authentication(router);
    users(router);
    neo4j(router);
    return router;
}