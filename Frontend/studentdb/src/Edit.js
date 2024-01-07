import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Flex , Input , Button} from 'antd'
function Edit({updateHandler,students , updatedName,setUpdatedName , updatedRegisterNo,setUpdatedRegisterNo , updatedCourse,setUpdatedCourse ,updatedFees,setUpdatedFees}) {
    let {id} = useParams()
    let student = students.find(student => (student.id).toString() == id )
    useEffect(()=>{
        if (student){

            setUpdatedName(student.name)
            setUpdatedCourse(student.course)
            setUpdatedRegisterNo(student.registerno)
            setUpdatedFees(student.fee)
        }
        
    },[])
    
  return (
    <Flex  align='center' gap="middle" vertical style={{display : "flex" , alignItems : "center"}}>
        <h1>Update Data</h1>
        <form onSubmit={(e)=>{
          e.preventDefault();
          updateHandler(id);
        }} action="" style={{display : "flex" ,flexDirection : "column",margin:"auto", alignItems : "center"}}>

  <Input required value={updatedName} onChange={(e)=>{setUpdatedName(e.target.value);}} addonBefore="Name"  style={{width : "10cm" , marginBottom:"10px" }} />
  <Input required value={updatedRegisterNo} onChange={(e)=>{setUpdatedRegisterNo(e.target.value);}} addonBefore="Register No"  style={{width : "10cm" , marginBottom:"10px"}} />
  <Input required value={updatedCourse} onChange={(e)=>{setUpdatedCourse(e.target.value);}} addonBefore="Course"  style={{width : "10cm" , marginBottom:"10px"}} />
  <Input required value={updatedFees} onChange={(e)=>{setUpdatedFees(e.target.value);}} addonBefore="Fees"  style={{width : "10cm" , marginBottom:"10px"}} />
        <Button type='primary' htmlType="submit"  >Update</Button>
        </form>
        </Flex >
  )
}

export default Edit