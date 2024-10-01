require("dotenv").config();
const express = require("express");
const cors = require("cors");

const User = require("./users/model");

const userRouter = require("./users/routes");

const port = process.env.PORT || 5004;

const app = express();

app.use(express.json());

app.use(cors());

app.use(userRouter);

const syncTables = () => {
    User.sync();
};

app.use("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"})
});

app.listen(port, () => {    
    syncTables();
    console.log(`Server is listnening on port ${port}`);
});