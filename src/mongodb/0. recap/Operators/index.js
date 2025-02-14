/*
    🔸 MongoDB Collection Information 🔸

    1️⃣ 👉🏻 Open CMD 
    2️⃣ 👉🏻 Type "mongosh"
    3️⃣ 👉🏻 Type "show dbs"
    4️⃣ 👉🏻 Type "db.getName()"
    5️⃣ 👉🏻 JavaScript in MongoDB
    6️⃣ 👉🏻 JSON in MongoDB
*/


/*
    🔸 show.dbs 🔸
    🔹 allows us to show or to check all of our databases 🔹

    🔸 db.getName() 🔸
    🔹 allows us to get the name of the database we are currently in 🔹

    🔸 db.Collection-Name.insertOne() 🔸
    🔹 Insert a new Collection to our database 🔹

    🔸 show collections 🔸
    🔹 allows us to show all of our collections 🔹
*/


/*
    🔸 db.Collection-Name.insertOne() 🔸
    🔹 Insert a new Collection to our database 🔹

    🔸 db.Collection-Name.insertMany() 🔸
    🔹 Insert multiple new Collections to our database 🔹

    🔸 db.Collection-Name.find() 🔸
    🔹 Find a Collection in our database 🔹

    🔸 db.Collection-Name.findOne() 🔸
    🔹 Find a single Collection in our database 🔹

    🔸 db.Collection-Name.findMany() 🔸
    🔹 Find multiple Collections in our database 🔹
*/


/*
    🔸 db.Collection-Name.sort() 🔸
    🔹 Sort a Collection in our database 🔹

    🔸 db.Collection-Name.limit() 🔸
    🔹 Limit a Collection in our database 🔹

    🔸 db.Collection-Name.skip() 🔸 
    🔹 Skip a Collection in our database 🔹
*/


/*
    show the movies that its "ratings" are less than 8
    db.movies.find({"ratings":{$lt:8}})
    
    the "$lt" operator is used to find all documents where the value of the ratings field is less than given value
    the "$gt" operator is used to find all documents where the value of the ratings field is greater than given value
    the "$gte" operator is used to find all documents where the value of the ratings field is greater than or equal to given value
    the "$lte" operator is used to find all documents where the value of the ratings field is less than or equal to given value

    🔹 $lt 👉🏻 Less Than 🔹
    🔹 $gt 👉🏻 Greater Than 🔹
    🔹 $gte 👉🏻 Greater Than or Equal To 🔹
    🔹 $lte 👉🏻 Less Than or Equal To 🔹
*/