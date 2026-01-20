
export const storeStudentInfo = (newStudent) => {
    const existingStudents = localStorage.getItem("all_students");

    const studentList =  existingStudents ? JSON.parse( existingStudents) : [];

    const updatedList = [
        ...studentList, {
            ...newStudent, id: Date.now()
        }
    ];

    localStorage.setItem("all_students", JSON.stringify(updatedList));

    console.log("Saved successfully! Total students:", updatedList.length);
}

export const getStudentInfo = () => {
    const existingStudents = localStorage.getItem("all_students");

    const studentList =  existingStudents ? JSON.parse( existingStudents) : [];

    return studentList;
}

export const deleteStudentFromStorage = (studentId) => {
    const existingStudents = localStorage.getItem("all_students");

    const studentList =  existingStudents ? JSON.parse( existingStudents) : [];

    const newStudentList = studentList.filter((student) => student.id !== studentId);
    console.log(newStudentList);
    localStorage.setItem("all_students", JSON.stringify(newStudentList));
}

export const updateStudentFromStorage = (id, updatedStudent) => {
    const existingStudents = localStorage.getItem("all_students");
    const studentList = existingStudents ? JSON.parse(existingStudents) : [];

    const newStudentList = studentList.map((student) => {
        if(student.id === id) {
            return {...updatedStudent, id: id};
        }

        return student;
    })
    localStorage.setItem("all_students", JSON.stringify(newStudentList));
}