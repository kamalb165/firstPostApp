const express = require('express');
const dbConnect = require('./config/db');

const app = express();
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

dbConnect();
app.get('/', (req, res) => res.send('api running'));

app.use('/api/users', require('./route/api/users'));
app.use('/api/profile', require('./route/api/profile'));
app.use('/api/posts', require('./route/api/posts'));
app.use('/api/auth', require('./route/api/auth'));

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
