import helloController from "./controllers/hello-controller.js";
import usersController from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

// const mongoose = require('mongoose');
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/webdev');

// const express = require('express');
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());


helloController(app);
usersController(app);
tuitsController(app);


app.get('/', (req, res) =>
    {res.send('Welcome to Full Stack Development!')})

import service from "./db/movies/service.js";
service(app);
app.listen(process.env.PORT || 4000);
// it uses the PORT environment variable if available on Heroku,
// or uses 4000 otherwise when running locally on our machines.