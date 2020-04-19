const express = require('express');
const router = express.Router();
const urlAccessor = require('./urlModel');

// Get long URL from short URL.
router.get('/url/:id', async (req, res) => {
    try {
        const url = await urlAccessor.findURL(req.params.id);
        if (url) {
            return res.send(url.longUrl);
        } else {
            return res.send('http://localhost:3000/error');
        }
    } catch (err) {
        res.status(500).json('Server error');
    }
});

module.exports = router;