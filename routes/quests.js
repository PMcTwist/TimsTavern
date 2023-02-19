const express = require('express');
const router = express.Router();
const db = require('../utils/database');
const Quest = require('../models/quest');

//Get Quest list
router.get('/', async (req, res) => {
    try {
        const quests = await Quest.findAll();
        res.render('quests', {quests});
    }
    catch {
        err => console.log(err);
    }
});

// Add a Quest!
router.post('/add', async (req, res) => {
    let { title, skills, reward, description, contact } = data;

    try {
        await Quest.create({
            title,
            skills,
            reward,
            description,
            contact
        })

        res.redirect('/quests')
    }
    catch {
        err => console.log(err);
    }


})


module.exports = router;