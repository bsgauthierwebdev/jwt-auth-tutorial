# JWT Tutorial for working in a PERN stack

## Steps involved to generate JSON web tokens, store and access them for authentification and authorization

### Backend Development Steps:
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

### Frontend Development Steps:
1. Create React application 'client'
2. Delete unnecessary files - App.test.js, logo.svg, reportWebVitals.js, setupTests.js
3. Clean up App.js, index.js and index.html files
4. Create Components folder in src folder
5. Create component files for Dashboard, Login & Register
6. Install dependencies - React-Router-Dom, React-Toastify
7. Import BrowserRouter, Routes, Route & Navigate from react-router-dom into App.js
8. Build route structure in App.js
9. Import useState into App.js
10. Set up isAuthenticated state in App.js
11. Build setAuth() function to authenticate users
12. Add setAuth call to each of the route elements
13. Test setAuth by adding buttons in Login & Dashboard components to change the status (true/false)

#### Register Component
14. Start building Register components, adding useState hook
15. Build form to enter new user's information (username, email, password)
16. Use useState to set the value of the inputs
17. Create function to handle change in input values
18. Set up the onChange function to handle setting the value of the inputs
19. Create submit function to handle registering the user
20. Tie the submit function to the form via onSubmit function
21. Test function to make sure registration works and responds with a token
22. Add token to local storage so the setAuth state reads "true"

#### Login Component
23. Import useState into login component
24. Create form to enter user information
25. Create inputs for email and password fields
26. Build useState to handle the input fields
27. Define the inputs
28. Build the onChange function to assign values to the input fields
29. Add the onChange call to the input fields
30. Build the onSubmit function to log in
31. Attach the form to the onSubmit function

#### Dashboard Component
