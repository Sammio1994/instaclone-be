const bcrypt = require("bcrypt")

const User = require("../users/model")

const salt = parseInt(process.env.SALT);

const hashPass = async (req, res, next) => {
    console.log("hashpass req.body", req.body)
    try {
const hashedPass = await bcrypt.hash(req.body.password, salt);
req.body.password = hashedPass;
next();

    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

module.exports = {
    hashPass: hashPass
};