// Root 👉🏻 "middlewares" Folder 👉🏻 auth.js


const userCredentials = (req, res, next) => {
    console.log("username: HuXn");
    console.log("email: huxn@gmail.com");
    console.log("password: 123456");

    next();
}

export {
    userCredentials
}