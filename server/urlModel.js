const mongoose = require("mongoose")
const urlSchema = require('./urlSchema').urlSchema
const urlModel = mongoose.model("url", urlSchema);


function insertURL(url) {
    return urlModel.create(url);
}

function updateURL(url, newURL) {
    //idk yet
}

function findURL(id) {
    // idk yet
    return urlModel.find({ urlID: id }).exec();
}

function deleteURL(url) {
    // idk yet
}

module.exports = { insertURL, updateURL, findURL, deleteURL };