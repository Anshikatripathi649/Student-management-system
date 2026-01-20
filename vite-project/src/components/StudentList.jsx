import { useEffect, useState} from 'react';
import { getStudentInfo, deleteStudentFromStorage } from '../utils/storage.jsx';

const StudentList = ({ studentData, onEdit , refreshList }) => {

    const handleDeleteOnClick = (studentId) => {
        deleteStudentFromStorage(studentId);
        refreshList();
    }

  return (
    <div class='container m-5 p-5 mt-0 pt-0'>
      <h3>Student List</h3>
       {studentData.length === 0 ? (
        <div className="alert alert-warning">
            No students found!
        </div>
       ) : (
        <table className="table table-striped table-hover">
            <thead className="table-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Roll No</th>
                    <th scope="col">Class</th>
                    <th scope="col">Action</th>
                     <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                { studentData.map((student, index) => (
                   <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{student.name}</td>
                    <td>{student.rollNumber}</td>
                    <td>{student.className}</td>
                    <td><button className="btn btn-danger" onClick={() => handleDeleteOnClick(student.id)}>Delete</button></td>
                    <td><button className="btn btn-warning" onClick={() => onEdit(student)}>Update</button></td>
                   </tr>
                ))
                }
            </tbody>
        </table>
       )}
    </div>
  )
}

export default StudentList;
