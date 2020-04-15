const express = require('express');
const router = express.Router();
const urlAccessor = require('./urlModel');

// Test server.
router.get('/', (req, res) => {
    console.log("get")
    res.status(200).json("test")
});

// Create a new DB entry. NO error handling or checking.
router.post('/:id', async (req, res) => {
    try {
        const url = await urlAccessor.findURL(req.params.id);
        if (url) {
            return res.status(404).json('url alias already exsists');
        } else {
            const newUrl = req.body;
            return urlAccessor.insertURL(newUrl)
                .then((response) => res.status(200).send(response),
                    (error) => res.status(404).send(`Error inserting url:${error}`))
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

// Delete URL if it has a urlID.
router.delete('/url/:id/edit', (req, res) => {
    const id = req.params.id;
    return urlAccessor.deleteURL(id)
        .then((response) => res.status(200).send(response),
            (error) => res.status(404).send(`Error deleting url:${error}`))
});

// Edit URL if it has a urlID.
router.put('/url/:id/edit', async (req, res) => {
    let newUrl = req.body;
    try {
        const url = await urlAccessor.findURL(req.params.id);
        if (url) {
            return urlAccessor.updateURL(id, newUrl)
                .then((response) => res.status(200).send(response),
                    (error) => res.status(404).send(`Error updating url:${error}`))
        } else {
            return res.status(404).json('No url found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});


module.exports = router;