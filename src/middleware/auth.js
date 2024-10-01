//Route4, comparepass, controller for login.
const bcrypt = require("bcrypt")

const User = require("../users/model")

const salt = parseInt(process.env.SALT);

const hashPass = async (req, res, next) => {
    console.log("hashpass req.body", req.body)
    try {
// hash password
const hashedPass = await bcrypt.hash(req.body.password, salt);

// replace password
req.body.password = hashedPass;

// use next()
next();

    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

const comparePass = async (req, res, next) => {
    try {
        const user = await User.findOne({where: {username: req.body.username}});
        if (!user) {
            return res.status(404).json({message: "username not found in the database system", user: req.user.username})
        };
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(401).json({message: "incorrect password, please try again."});
        };
        req.user = user;
        next();
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,
};
