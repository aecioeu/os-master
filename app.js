// Import necessary modules
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');
const FileStore = require('session-file-store')(session);
const compression = require('compression');
const socketIo = require('socket.io');
require('dotenv').config()

// Load configuration
const config = require('./config.json');

const app = express();
const port = process.env.PORT || 80;

// Middleware configuration
app.use(compression());
app.disable('x-powered-by');
app.use(express.static(__dirname + '/public', {
    maxAge: 86400000,
    setHeaders: (res) => {
        res.setHeader('Cache-Control', 'no-cache');
    }
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser('secretString'));
app.use(session({
    secret: 'vidyapathaisalwaysrunning',
    saveUninitialized: true,
    resave: true,
    store: new FileStore(),
    cookie: {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        secure: false,
        domain: 'localhost'
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// View engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Logging
// app.use(morgan('combined'));

// Passport configuration
require('./app/config/passport')(app, passport);

// Start server
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Socket.io setup
const io = socketIo(server, {
    cors: {
        origin: '*'
    }
});
global.io = io;

// Routes
require('./app/routes.js')(app, passport);

// Uncomment and configure the following sections if needed

/*
const clients = {}; 

setInterval(() => {
  const msg = Math.random();
  io.emit('message', msg);
  console.log(msg);
}, 1000);

io.on("connection", (client) => {  
  console.log('Client connected:', client.id);
  client.on("join", (name) => {
    console.log("Joined:", name);
    clients[client.id] = name;
    client.emit("update", "You have connected to the server.");
    client.broadcast.emit("update", name + " has joined the server.");
  });

  client.on("send", (msg) => {
    console.log("Message:", msg);
    client.broadcast.emit("chat", clients[client.id], msg);
  });

  client.on("disconnect", () => {
    console.log("Client disconnected:", client.id);
    io.emit("update", clients[client.id] + " has left the server.");
    delete clients[client.id];
  });
});

const users = {};

io.on("connection", (socket) => {
  console.log('New socket connected:', socket.id);

  socket.on('new-connection', (data) => {
    console.log('New connection event received:', data);
    users[socket.id] = data.username;
    console.log('Users:', users);
    socket.emit('welcome-message', {
      user: 'server',
      message: `Welcome to this Socket.io chat ${data.username}. There are ${
        Object.keys(users).length
      } users connected`,
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    io.emit("user disconnected", socket.id);
    delete users[socket.id];
  });
});
*/

