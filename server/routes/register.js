const router = require('./routes');
const User = require('../db/User');
router.post('/register', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;
    const newUser = new User({
        "name": name,
        "email": email,
        "password": pass
    });
    const saveUser = async () => {
        const userExist = await User.findOne({ "email": email });
        if (userExist) {
            res.status(200).json({ "msg": "User Already Exist" });
        }

        else {
            const result = await newUser.save();
            res.json({ "msg": "SuccessFul" });
        }
    };
    saveUser().catch((err) => {
        console.log(err);
    });
});

module.exports = router;