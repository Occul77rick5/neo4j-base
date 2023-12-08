import neo4j from 'neo4j-driver';
import * as dotenv from 'dotenv';

dotenv.config();

const neo4jUrl = process.env.NEO4J_DATABASE_URL;
const neo4jPassword = process.env.NEO4J_DATABASE_PASSWORD;
const neo4jUsername = process.env.NEO4J_DATABASE_USERNAME;

export const neo4jCon = neo4j.driver(neo4jUrl, neo4j.auth.basic(neo4jUsername, neo4jPassword));