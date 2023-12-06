const router = require('./routes');
const User = require('../db/User');

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    const saveUser = async () => {
        const userExist = await User.findOne({ "email": email });
        if (userExist) {
            if (userExist.password == pass)
            {
                res.status(200).json({ "msg": "SuccessFul" });
            }
            else
            {
                res.status(200).json({ "msg": "Invalid Password" });
            }
        }
        else {
            res.status(200).json({ "msg": "User Not Found" });
        }
    };
    saveUser().catch((err) => {
        console.log(err);
    });
});

module.exports = router;