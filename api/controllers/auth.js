const User = require('../models/User');

exports.RegisterUser = async(req, res) => {
    const { email, username, password } = req.body;
    const newUser = new User({
        email: email,
        username: username,
        password: password
    })
    const user = await newUser.save();
    const { password, ...info} = user._doc;
    res.status(201).send({
        success:{
            data: {info}
        }
    })
}