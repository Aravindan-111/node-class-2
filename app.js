const express = require('express');

const postRoutes = require('./routs/posts.routes');
const userRoutes = require('./routs/users.routes');

const app = express();

// Middleware to Parse request body into JSON format
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  console.log('Logging middleware called !!');
  next();
});

// Routes
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// Server Start
app.listen(3001, () => console.log('server running at port 3001'));
