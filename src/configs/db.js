const mongoose = require("mongoose");

const mongodb_connection = () => {

    mongoose.Promise = global.Promise;

    mongoose
        .connect( process.env.MONGO_LINK)
        .then(() => {
            console.log("Successfully connect to MongoDB");
        })
        .catch((err) => {
            console.log(
                `Could not connect to the database. Existing now...\n${err}`
            );
            process.exit();
        });
};

module.exports = mongodb_connection;

