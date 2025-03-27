require('dotenv').config();
const app = require('express')();
// const http = require('http').Server(app);
const mongoose = require('mongoose');           //using mongoose ODM (Object-Document-Mapper)
const User = require('./models/userModel');

app.use(require('body-parser').json());

//searching a user by username
// function search(uname){
//     let result;

//     });
//     return result;
// }

//connecting to DB
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSWD}@cluster71676.gi9nxlf.mongodb.net/?retryWrites=true&w=majority`)
    .then(function () { console.log("DB Connected!") })
    .catch(function (error) { console.log(error) });

//Homepage
app.get('/', function (req, res) {
    res.send("App is Online! Start using API endpoints using a API Client like Postman or Thunderclient, etc.");
    console.log("someone is at home!");
});

// Creating an entry or document in atlas db [_CREATE_]
app.post('/users', async (req, res) => {
    const NewUser = req.body;

    try {
        const createdUser = await User.create({
            "name": NewUser.name,
            "username": NewUser.username,
            "email": NewUser.email,
            "phone": NewUser.phone,
            "deleted": NewUser.deleted
        });
        res.send(createdUser);
        console.log('USER CREATED SUCCESSFULLY...');
    } catch (error) {
        console.log("Error Occured: ", error);
        res.send(error);
    }

});

//Reading a specific user by username from atlas db [_READ_]
app.get('/users/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });

        if (user) {
            res.json(user);
            console.log("User Found: ", user);
        } else {
            res.json({ "Message": "No user found!" });
            console.log("No User Found: ");
        }
    } catch {
        (error) => {
            console.log("Error in Query, Bad Request", error);
            res.send({ "Message": "Error in Query, Bad Reques" });
        }
    }
});

//Listing All Users from Atlas DB                   [_READ_]
app.get('/allusers', async (req, res) => {
    try {
        const allUsers = await User.find({});

        if (allUsers) {
            res.json(allUsers);
            console.log("All The Users Are Listed: ", allUsers);
        } else {
            res.json({ "Message": "Error In Listing, Cannot get allUsers!" });
            console.log("Cannot get allUsers!");
        }
    } catch {
        (error) => {
            console.log("Error in Query, Bad Request", error);
            res.send({ "Message": "Error in Query, Bad Reques" });
        }
    }
});

//Updating User Email                                [_UPDATE_]
app.put('/emailupdate/:username', async (req, res) => {

    const filter = { username: req.params.username };

    const userinfo = req.body;
    const update = { $set: { email: userinfo.email } };

    try {
        const result = await User.updateOne(filter, update);
        const user = await User.findOne({ username: req.params.username });

        if (!result) {
            console.log("Error in User Update Query: ", err);
            res.json({ "Message": "Error in Updating user!" });
        } else {
            console.log("Info About Update Operation: ", result);
            res.json(user);
        }

    } catch {
        (error) => {
            console.log("Error in Query, Bad Request", error);
            res.send({ "Message": "Error in Query, Bad Reques" });
        }
    }
});

//Updating User Username                                [_UPDATE_]
app.put('/usernameupdate/:email', async (req, res) => {

    const filter = { email: req.params.email };

    const userinfo = req.body;
    const update = { $set: { username: userinfo.username } };

    try {
        const result = await User.updateOne(filter, update);
        const user = await User.findOne({ username: userinfo.username });

        if (!result) {
            console.log("Error in Username Update Query: ", err);
            res.json({ "Message": "Error in Updating username!" });
        } else {
            console.log("Info About Username Update Operation: ", result);
            res.json(user);
        }

    } catch {
        (error) => {
            console.log("Error in Query, Bad Request", error);
            res.send({ "Message": "Error in Query, Bad Reques" });
        }
    }
});


//Updating User Phone                               [_UPDATE_]
app.put('/phoneupdate/:username', async (req, res) => {

    const filter = { username: req.params.username };

    const userinfo = req.body;
    const update = { $set: { phone: userinfo.phone } };

    try {
        const result = await User.updateOne(filter, update);
        const user = await User.findOne({ username: req.params.username });

        if (!result) {
            console.log("Error in User Update Query: ", err);
            res.json({ "Message": "Error in Updating user!" });
        } else {
            console.log("Info about Update Operation: ", result);
            res.json(user);
        }
    } catch {
        (error) => {
            console.log("Error in Query, Bad Request", error);
            res.send({ "Message": "Error in Query, Bad Reques" });
        }
    }
});

//Deleting User from DB using username               [_DELETE_]
app.delete('/delete/:username', async (req, res) => {

    const filter = { username: req.params.username };

    try {
        const user = await User.findOne(filter);

        const result = await User.deleteOne(filter);       

        if (!result) {
            console.log("Error in User Delete Query: ", err);
            res.json({ "Message": "Error in Deleting user!" });
        } else {
            console.log("Info about Delete Operation: ", result);
            res.json({ "Message": `User ${user.username} is DELETED!` });
        }
    } catch {
        (error) => {
            console.log("Error in Query, Bad Request", error);
            res.send({ "Message": "Error in Query, Bad Reques" });
        }
    }
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Server is listening at http://localhost:3000');
});