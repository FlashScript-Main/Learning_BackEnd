const allStudents = (req, res) => {
    res.send("All Students");
}

const createStudent = (req, res) => {
    res.send("Add a New Student");
}

const updateStudent = (req, res) => {
    res.send("Update a Student");
}

const deleteStudent = (req, res) => {
    res.send("Delete a Student");
}

export {
    allStudents,
    createStudent,
    updateStudent,
    deleteStudent
}