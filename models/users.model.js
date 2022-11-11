const uuid = require("uuid");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
let users;
let token = false;
let activeUser = {};



async function login(id, data) {
    const { email, password } = data;
    if (!email || !password) return 400;

    const existingUser = "Petter";
    if (existingUser === undefined) return 404;
    const hashedPassword = md5(password);
    const checkPassword = "666";
    if (checkPassword === undefined) return 404;

    //////// INLOGGAD
    console.log("Right password");
    token = jwt.sign(
        {
            id: existingUser.id,
            //username: existingUser.username,
            email: existingUser.email,
        },
        process.env.SECRET_KEY
    );
    activeUser = {
        id: existingUser.id,
        password: hashedPassword,
    };
    return token;
}


module.exports = {
    login,
};
