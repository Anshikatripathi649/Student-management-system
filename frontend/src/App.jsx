import { useState, useEffect } from 'react'
import StudentForm from './components/StudentForm.jsx'
import StudentList from './components/StudentList.jsx'
import SearchBar from './components/SearchBar.jsx'
import { getStudentInfo } from './utils/storage.jsx'

function App() {
   const [studentData, setStudentData] = useState([]);
   const [editingStudent, setEditingStudent] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');

   const fetchStudents = () => {
    const data = getStudentInfo();
        setStudentData(data);
   };

   const filteredStudents = studentData.filter((student) => {
      return student.name.toLowerCase().includes(searchTerm.toLowerCase());
   });

   useEffect(() => {
         fetchStudents();
    }, []);

   const handleEdit = (student) => {
    setEditingStudent(student);
   }
  return (

    <div className='container m-5 p-5'>
       <h1 class="text-center">Student Management System</h1>
       <StudentForm 
         studentToEdit={editingStudent}
         setEditingStudent={setEditingStudent} 
         refreshList={fetchStudents} 
         />

        <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        /> 

       <StudentList 
       studentData = {filteredStudents}
       onEdit={handleEdit} 
       refreshList = {fetchStudents} 
       />
    </div>
  )
}

export default App
