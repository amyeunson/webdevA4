const express = require('express');
const router = express.Router();
const urlAccessor = require('./urlModel');
const validUrl = require('valid-url');

// Test server.
router.get('/', (req, res) => {
    res.status(200).json("test")
});

// Create a new DB entry. NO error handling or checking.
router.post('/:id', async (req, res) => {
    try {
        const url = await urlAccessor.findURL(req.params.id);
        if (url) {
            return res.status(400).send('url alias already exsists');
        } else {
            const newUrl = req.body;
            return urlAccessor.insertURL(newUrl)
                .then((response) => res.status(200).send(newUrl),
                    (error) => res.status(404).send(`Error inserting url:${error}`))
        }
    } catch (err) {
        res.status(500).json('Server error');
    }
});

// Delete URL if it has a urlID.
router.delete('/url/:id/edit', (req, res) => {
    const id = req.params.id;
    return urlAccessor.deleteURL(id)
        .then((response) => res.status(200).send(response),
            (error) => res.status(400).send(`Error deleting url:${error}`))
});

// Edit URL if it has a urlID.
router.put('/url/:id/edit', async (req, res) => {
    let newUrl = req.body;
    try {
        const url = await urlAccessor.findURL(req.params.id);
        if (url) {
            return urlAccessor.updateURL(id, newUrl)
                .then((response) => res.status(200).send(response),
                    (error) => res.status(400).send(`Error updating url:${error}`))
        } else {
            return res.status(404).send('No url found');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
});

function isValid(url) {
    console.log(url);
    if (validUrl.isUri(url)) {
        return true;
    } else {
        return false;
    }
}


module.exports = router;