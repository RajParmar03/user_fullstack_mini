const express = require("express");
const cors = require('cors')
const {connection} = require("./config/db");
const {userRouter} = require("./routes/user.route");
const {adminRouter} = require("./routes/admin.route");

const app = express();


app.use(cors());
app.use(express.json());
app.use("/user" , userRouter);
app.use("/admin" , adminRouter);


app.listen(4500 , async() => {
    try {
        await connection;
        console.log("successfully connected to the DB....");
    } catch (error) {
        console.log("error occured during connecting with database.." , error);
    }
    console.log("server is successfully running at 4500...");
});