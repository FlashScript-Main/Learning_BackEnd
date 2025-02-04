// Root 👉🏻 "middlewares" Folder 👉🏻 auth.js


// 1️⃣ 👉🏻 Create the Middleware Function (in a seprate file)
const userCredentials = (req, res, next) => {
    console.log("username: HuXn");
    console.log("email: huxn@gmail.com");
    console.log("password: 12345678");

    next();
}


export {
    userCredentials
}