const mongoose = require("mongoose")
const urlSchema = require('./urlSchema').urlSchema
const urlModel = mongoose.model("url", urlSchema);


function insertURL(url) {
    return urlModel.create(url);
}

function updateURL(id, newURL) {
    return urlModel.updateOne({ urlID: id }, { $set: { longUrl: newURL.longUrl } }).exec();
}

function findURL(id) {
    return urlModel.findOne({ urlID: id }).exec();
}

function findCustomURL(id) {
    return urlModel.findOne({ urlID: id, custom: true }).exec();
}

function deleteURL(id) {
    return urlModel.deleteOne({ urlID: id }).exec();
}

module.exports = { insertURL, updateURL, findURL, findCustomURL, deleteURL };