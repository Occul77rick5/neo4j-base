import express from 'express';
import { neo4jCon } from '../db/neo4j';
import logger from '../logging/logger';


export const testConnection = async (req: express.Request, res: express.Response) => {
    try{
            const status = await neo4jCon.verifyAuthentication();
        
            logger.info("Neo4j Connection Status: " + status);
        
            return res.status(200).json(status).end();
            
        }catch(e){
            logger.error(e);
            return res.sendStatus(400);
        }
}


export const sessionTest = async (req: express.Request, res: express.Response) => {
    
    const session = await neo4jCon.session();

    try{
        
        const results = await session.run(
            `MATCH (p:Person)-[:DIRECTED]->(:Movie {title: $title})
              RETURN p.name
            `, // (1)
            { title: 'The Matrix' }, // (2)
            { timeout: 3000 } // (3)
          )  

          return res.status(200).json(results).end();

    }catch(e){
            logger.error(e);
            return res.sendStatus(400);

    }finally{
        await neo4jCon.close()
    }

}