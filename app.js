const express = require('express');
const mustache = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./utils/database');
const Quest = require('./models/quest');

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


const app = express();

// Handlebars
app.engine('handlebars', mustache.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.send(':)')
})

// Quest routes
app.use('/quests', require('./routes/quests'))


const PORT = process.env.PORT || 6969;

app.listen(PORT, console.log(`Server Running on Port ${PORT}`));
