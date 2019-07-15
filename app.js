const express = require('express'); 
const app = express(); 
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const passport = require('passport'); 

const users = require('./routes/api/users'); 
const tweets = require('./routes/api/tweets'); 

const User = require('./models/User'); 

const socket = require('socket.io');
const server = require('http').Server(app);
const io = socket(server);


mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.log(err)); 

app.use(passport.initialize()); 
require('./config/passport')(passport); 

app.use(bodyParser.urlencoded({
    extended: false 
})); 
app.use(bodyParser.json()); 



// app.get("/", (req, res) => {
//     const user = new User({
//         handle: "jim", 
//         email: "jim@jim.jim", 
//         password: "jimisgreat123"
//     })
//     user.save(); 
//     res.send("Hello Wd!"); 
// }); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/public/index.html');
});

app.use("/api/users", users); 
// app.use("/api/tweets", tweets); 

const port = process.env.PORT || 5000; 

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// }); 

server.listen(port, () => {
    console.log(`Yo server done socketed, port: ${port} `);
});