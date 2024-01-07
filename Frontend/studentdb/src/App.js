import './App.css';
import { Routes , Route , Link, useNavigate } from 'react-router-dom';
import Add from './Add';
import Home from './Home';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import api from '../src/api/students'
import Edit from './Edit';


function App() {
const [active,setActive]= useState(false)
const [students,setStudent]= useState([])
const [updatedName,setUpdatedName] = useState("")
const [updatedRegisterNo,setUpdatedRegisterNo] = useState("")
const [updatedCourse,setUpdatedCourse] = useState("")
const [updatedFees,setUpdatedFees] = useState("")
const [studentName,setstudentName] = useState("")
const [studentRegisterNo,setstudentRegisterNo] = useState("")
const [studentCourse,setstudentCourse] = useState("")
const [studentFees,setstudentFees] = useState("")
const [idToDel,setidToDel] = useState(-1)



let navigate = useNavigate()


// to add new data
const addHandler= async () => {
let updatedData = { name : studentName , registerno : studentRegisterNo, course : studentCourse ,fee : studentFees}
try{
 const response = await api.post(`/student/`,updatedData)
 console.log("Added");
 setstudentCourse("")
 setstudentName("")
 setstudentFees("")
 setstudentRegisterNo("")
 setActive(false)
navigate("/")
}
catch(e){
  console.log(e);
}
} 

// to edit a data
const updateHandler= async (id) => {
let updatedData = {id : id, name : updatedName , registerno : updatedRegisterNo, course : updatedCourse ,fee : updatedFees}
try{
 const response = await api.put(`/student/`,updatedData)
 console.log("updated");
navigate("/")
}
catch(e){
  console.log(e);
}
} 

// to delete 
const deleteHandler =async (id) =>{
  let studentdelete = {id : id, name : updatedName , registerno : updatedRegisterNo, course : updatedCourse ,fee : updatedFees}
try {
  console.log(studentdelete)
  await api.delete(`/student/?id=${id}`,studentdelete)
  setidToDel(-1)
} 
catch (e) {
  console.log(e);
}

}
useEffect(()=>{
const fetchstudent = async ()=>{
  try{
    const respose = await api.get('/student/')
    setStudent(respose.data)
    
    // console.log(respose.data)
  }
  catch(e){
    console.log(e);
  }
}
fetchstudent ();
},[students])


  return (
    <div className="App">

<Nav active={active} setActive={setActive}/>
    <Routes>
<Route path='/' element = {<Home students = {students} deleteHandler={deleteHandler} idToDel={idToDel} setidToDel={setidToDel} />}></Route>
<Route path='add' element = {<Add students={students} addHandler={addHandler} studentName={studentName} setstudentName={setstudentName} studentCourse={studentCourse} setstudentCourse={setstudentCourse} studentRegisterNo={studentRegisterNo} setstudentRegisterNo={setstudentRegisterNo} studentFees={studentFees} setstudentFees={setstudentFees} />}></Route>
<Route path='edit/:id' element = {<Edit students={students} updateHandler={updateHandler} updatedCourse={updatedCourse} setUpdatedCourse={setUpdatedCourse} updatedFees={updatedFees} setUpdatedFees={setUpdatedFees} updatedName={updatedName} setUpdatedName={setUpdatedName} updatedRegisterNo={updatedRegisterNo} setUpdatedRegisterNo={setUpdatedRegisterNo} />}></Route>
    </Routes>

    </div>
  );
}

export default App;
