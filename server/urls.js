const express = require('express');
const router = express.Router();
const urlAccessor = require('./urlModel');


// Test server.
router.get('/', (req, res) => {
    res.status(200).json("test")
});

// Create a new DB entry. NO error handling or checking.
router.post('/', (req, res) => {
    const newUrl = req.body;
    return urlAccessor.insertURL(newUrl)
        .then((response) => res.status(200).send(response),
            (error) => res.status(404).send(`Error inserting url:${error}`))
});

// Edit URL if it has a urlID.
router.put('/url/:ID/edit', (res, req) => {

});

// Get long URL from short URL. Use below for help.
router.get('/url/:ID', (res, req) => {
    // figure out routing functionality
    let id = req.params.id;
    res.redirect("www.googe.com");
});

// router.get('/url/:id', async (req, res) => {
//     try {
//         const url = await url.findURL({ urlID: req.params.id });
//
//         if (url) {
//             return res.redirect(url.longUrl);
//         } else {
//             return res.status(404).json('No url found');
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json('Server error');
//     }
// });

module.exports = router;