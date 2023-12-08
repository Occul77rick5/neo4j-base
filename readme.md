# Neo4J Typescript Base 


## Overview
This TypeScript application is designed with an API-first approach, utilizing the Neo4J database for data storage. The project emphasizes clean and maintainable code, with a focus on extensibility and scalability. Additionally, the application includes logging functionality, and there are plans for implementing a more robust authentication mechanism in the future.

## Prerequisites
Before getting started, ensure that the following prerequisites are met:

- Node.js and npm are installed on your machine.
- A Neo4J database instance is set up and accessible.
- MongoDB Database and Connection String

## Getting Started
1. Clone the repository:
```
    git clone https://github.com/Occul77rick5/neo4j-base.git
    cd neo4j-base
```    

2. Install dependencies:

```
    npm install
```

3. Copy and Configure .env variables:

```
    cp env-example .env

    SECRET_KEY="super secret guy"
    NEO4J_DATABASE_USERNAME="neo4j"
    NEO4J_DATABASE_PASSWORD="Password"
    NEO4J_DATABASE_URL="neo4j+s://{DATABASEINFO}.databases.neo4j.io"
    NODE_ENV="development"
    COOKIE_NAME="COOKIESSSSS"
    LOG_LEVEL="info"

```

3. Start the application:
```
npm start
The application should now be running at http://localhost:8080.
```


## API Documentation
The API documentation will come soon.

## Logging
The application includes logging functionality to help track and diagnose issues. Logs are stored in the logs directory. You can configure the logging Level in the env file, further log information can befound in logging/logger.ts. 

The denedency is winston logger. https://www.npmjs.com/package/winston



## Future Enhancements
### Authentication
Autentication was more of a test, it is not required for calls and middleware is lacking. Much is requred around this if you are going to use it, ALWAYS implement industry best practices and do your due diligence. 

The current version of the application uses a basic authentication mechanism. Future plans include implementing a more secure and extensible authentication system, possibly integrating OAuth2.0 or JWT for enhanced security.

### Contributing
Feel free to contribute to the project by opening issues or creating pull requests. Your feedback and contributions are highly appreciated.

### License
This project is licensed under the MIT License.






