

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const urlRoutes = require('./routes/urls');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://user1:ramyapraba@cluster0.bnxxvoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use('/api/auth', authRoutes);
app.use('/api/urls', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
