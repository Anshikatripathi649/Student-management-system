import {useState, useEffect} from 'react';
import { storeStudentInfo, updateStudentFromStorage } from '../utils/storage.jsx';

const StudentForm = ({studentToEdit, setEditingStudent, refreshList}) => {
  const [studentInfo, setStudentInfo ] = useState({
    name:"",
    rollNumber: "",
    email: "",
    className:"",
    isActive: false,
  });
 
  useEffect(() => {
    if(studentToEdit) {
      setStudentInfo(studentToEdit)
    }
  }, [studentToEdit]);

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;

    setStudentInfo((preData) => ({
      ...preData, 
      [name]: type === "checkbox" ? checked: value
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if(studentToEdit) {
      updateStudentFromStorage(studentInfo.id, studentInfo);
      setEditingStudent(null);
      
    }else {
      storeStudentInfo(studentInfo);
    }
    refreshList();

    setStudentInfo({
      name:"",
      rollNumber: "",
      email: "",
      className:"",
     isActive: false,
    });
     
  }

  return (
    <div class='container p-5 m-5 col offset-3'>
      <h3>Student Registration Form</h3> 
       <form onSubmit={handleOnSubmit}>
        <div class="mb-3">
    <label htmlFor="name" class="form-label">Name</label>
    <input type="type" 
    class="form-control" 
    id="name" 
    aria-describedby="emailHelp" 
    name="name"
    value={studentInfo.name}
    onChange={handleOnChange}
    />
  </div>
      <div class="mb-3">
    <label  htmlFor="rollNumber" class="form-label">Roll No. </label>
    <input type="number" 
    class="form-control" 
    id="rollNumber" 
    onChange={handleOnChange} 
    name="rollNumber"
    value={studentInfo.rollNumber}
    aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label  htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" 
    class="form-control" id="exampleInputEmail1" 
    onChange={handleOnChange} 
    name="email"
    value={ studentInfo.email}
    aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label  htmlFor="className" class="form-label">Class/Grade</label>
    <input type="number" 
    class="form-control" 
    id="classMame" 
    value={ studentInfo.className}
    onChange={handleOnChange} name="className"
    />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" 
    onChange={handleOnChange}
    name="isActive"
    checked={studentInfo.isActive}/>
    <label class="form-check-label" htmlFor="exampleCheck1">Is Student Active?</label>
  </div>
  <button type="submit" class="btn btn-primary">
    {studentToEdit ? "Update Student" : "Add Student"}
  </button>
</form>
    </div>
  )
}

export default StudentForm;
