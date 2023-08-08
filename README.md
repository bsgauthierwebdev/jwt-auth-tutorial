# JWT Tutorial for working in a PERN stack

## Steps involved to generate JSON web tokens, store and access them for authentification and authorization

#### Backend Development Steps:
1. Create 'server' folder in application main folder
2. cd into folder and run 'npm init -y'
3. Install dependencies express, cors, pg, jsonwebtoken, bcrypt & nodemon
4. Add index.js to server folder & start building basic functions
5. Start to build database and tables
6. Connect server to database with server file db.js
7. Start building the routes, starting with the auth (Register / Login) routes (hwtAuth.js)
8. Generate the JWT token utility (jwtGenerator.js) and add to jwtAuth file
9. Set up the middleware (authorization.js, validInfo.js) and add it to the jwtAuth file
10. Set up the private routes
11. Create dashboard route, requiring check to see if user is authorized for that area

#### Frontend Development Steps:
1. Create React application 'client'
