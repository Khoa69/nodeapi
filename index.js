require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.DEFAULT_PORT || process.env.PORT;
const mongodb_connection = require("./src/configs/db.js");

mongodb_connection();

app.use(express.json());

app.use(bodyParser.json());

app.use("/api", require("./src/routes/index.js"));

app.use((err,req,res,next) =>{
    const error = app.get('env') === 'development'? err : {};
    const status = err.status || 500;

    return res.status(status).json({
        error: {
            message: error.message,
        }
    })
})

app.listen(PORT,()=> console.log(`🚀 Sever Running on http://localhost:${PORT}`));