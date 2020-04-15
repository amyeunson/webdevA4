const mongoose = require("mongoose")
const urlSchema = require('./urlSchema').urlSchema
const urlModel = mongoose.model("url", urlSchema);


function insertURL(url) {
    return urlModel.create(url);
}

function updateURL(url, newURL) {
    return urlModel.updateOne({ urlID: url }, { $set: { urlID: newURL.urlID, longUrl: newURL.longUrl } })
}

function findURL(id) {
    return urlModel.findOne({ urlID: id }).exec();
}

function deleteURL(id) {
    return urlModel.deleteOne({ urlID: id }).exec();
}

module.exports = { insertURL, updateURL, findURL, deleteURL };