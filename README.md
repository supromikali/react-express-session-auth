# react-express-session-auth
This app is an oversimplified example of the Node/React authentication workflow using express-session. 

Authentication has a few steps:
1. user should login by sending credentials (username/password) to the server `/api/login` endpoint using POST method (in this app even credentials are not sent, just an api call is being made)
2. server endpoint `/api/login` being reached triggers user data saving to a server session (using express-session) AND send success response back to client with success message in response body (for example just OK text) and session cookies (note the `connect.sid` on the screenshot below)

![Screenshot from 2020-04-12 18-50-49](https://user-images.githubusercontent.com/22643362/79073332-a1fd1580-7cee-11ea-8277-ae0631a1cd2b.png)

all of things in a section 2 are implemented using the following lines of code:
```
app.post('/api/login', function (req, res, next) {
    req.session.user = "test";
    res.send("ok")
});
```

3. after being authenticated client can send POST requests and receive information that was not allowed before (in this example app it is just word "test") but in a real app that could be dashboard data or user profile info

![Screenshot from 2020-04-12 18-58-04](https://user-images.githubusercontent.com/22643362/79073486-96f6b500-7cef-11ea-832d-f0b07f50f172.png)

# To Run The App Locally
following steps should be done:
- `npm i` to install all dependencies
- `npm run server` to start Nodejs server
- `npm start` to run the React app

After that the blank page should appear in the browser on port 5000 with only 1 button so far: Login that could be used for authentication
