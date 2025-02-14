// Root 👉🏻 "controllers" Folder 👉🏻 homeController.js


const homeController = (req, res) => {

    // Now Let's Render the HTML file by Dynamic Condition Statement
    const data = {
        name: "HuXn",
        age: 25,
    }

    res.render("index", data);
}


export default homeController;

/*
Create this conditonal statement in the index.ejs file:
if (age >= 18) {
    <h1>Access Granted</h1>
}
else {
    <h1>Access Denied</h1>
}
*/