// Root 👉🏻 "controllers" folder 👉🏻 student.js


/*  
    🔥 Note 🔥
    🔹 This is a controller file. 
    It contains all the functions that are used to handle the requests made to the server
    and all of these functions are called Controllers. 🔹
*/


const allStudents = (req, res) => {
    res.send("All Students");
};

const createStudent = (req, res) => {
    res.send("Create a new Student");
};

const updateStudent = (req, res) => {
    res.send("Update a Student");
};

const deleteStudent = (req, res) => {
    res.send("Delete a Student");
};


// Atlast, export all the functions that are used in the routes file
export {
    allStudents,
    createStudent,
    updateStudent,
    deleteStudent
};