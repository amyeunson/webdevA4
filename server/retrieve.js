const express = require('express');
const router = express.Router();
const urlAccessor = require('./urlModel');

// Get long URL from short URL.
router.get('/url/:id', async (req, res) => {
    try {
        const url = await urlAccessor.findURL(req.params.id);
        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.redirect('https://ae-urlshortener.herokuapp.com/error');
        }
    } catch (err) {
        res.status(500).json('Server error');
    }
});

module.exports = router;