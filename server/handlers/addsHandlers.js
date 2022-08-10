"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const dbName = "real_estate";

const { sendResponse } = require("./helperFunctions.js");

const getAdds = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();
        const db = client.db(dbName);

        const adds = await db.collection("adds").find().toArray();

        adds
            ? sendResponse(res, 200, adds, "Adds are retrieved from database")
            : sendResponse(res, 404, null, "Adds are not found");
    } catch (error) {
        sendResponse(res, 500, null, "Server Error");
    }
    client.close();
};

const getAdd = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();
        const db = client.db(dbName);

        const _id = parseInt(req.params.add);

        const add = await db.collection("adds").findOne({ _id });
        add
            ? sendResponse(res, 200, add, `An add was found, id : ${_id}`)
            : sendResponse(res, 404, null, `An add was no found, id : ${_id}`);
    } catch (error) {
        sendResponse(res, 500, null, "Server Error");
    }
    client.close();
};
const addNewAdd = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();
        const db = client.db(dbName);

        let add = {
            _id: req.body._id,
            image: req.body.image,
            price: req.body.price,
            street: req.body.street,
            city: req.body.city,
            province: req.body.province,
            postal_code: req.body.postal_code,
            bedroom: req.body.bedroom,
            bathroom: req.body.bathroom,
            agency: req.body.agency,
        };
        await db.collection("adds").insertOne(add);
        sendResponse(res, 201, add, "An add was created");
    } catch (error) {
        sendResponse(res, 500, null, "Server Error");
    }
    client.close();
};

const updateAdd = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();
        const db = client.db(dbName);

        const _id = parseInt(req.body.id);
        const add = await db.collection("adds").findOne();

        const result = await db
            .collection("adds")
            .findOneAndUpdate(
                { _id: add._id },
                {
                    $set: {
                        _id: req.body._id,
                        image: req.body.image,
                        price: req.body.price,
                        street: req.body.street,
                        city: req.body.city,
                        province: req.body.province,
                        postal_code: req.body.postal_code,
                        bedroom: req.body.bedroom,
                        bathroom: req.body.bathroom,
                        agency: req.body.agency,
                    },
                }
            );
        result.value
            ? sendResponse(res, 200, result.value, `add was found, id : ${_id}`)
            : sendResponse(
                  res,
                  404,
                  result.value,
                  `An add was found, id : ${_id} `
              );
    } catch (error) {
        sendResponse(res, 500, null, "Server Error");
    }
    client.close();
};

const deleteAdd = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();
        const db = client.db(dbName);

        const _id = parseInt(req.body.id);
        const add = await db.collection('adds').findOne();

        const result = await db.collection('adds').findOneAndDelete({_id: add._id})
        result.value? sendResponse(res, 200, result.value, `an add was found, id : ${_id}`)
        : sendResponse(res, 404, result.value, `an add was not found, id : ${_id}`)
    } catch (error) {
        sendResponse(res, 500, null, 'Server Error')
    }
    client.close();
}

module.exports = {
    getAdds,
    getAdd,
    addNewAdd,
};