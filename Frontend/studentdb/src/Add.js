import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Flex , Input , Button} from 'antd'
function Add({addHandler,students , studentName,setstudentName , studentRegisterNo,setstudentRegisterNo , studentCourse,setstudentCourse ,studentFees,setstudentFees}) {
  
   
    
  return (
    <Flex  align='center' gap="middle" vertical style={{display : "flex" , alignItems : "center"}}>
        <h1>Add Data</h1>
        <form onSubmit={(e)=>{
          e.preventDefault();
          addHandler();
        }} action="" style={{display : "flex" ,flexDirection : "column",margin:"auto", alignItems : "center"}}>

  <Input required value={studentName} onChange={(e)=>{setstudentName(e.target.value);}} addonBefore="Name"  style={{width : "10cm" , marginBottom:"10px" }} />
  <Input required value={studentRegisterNo} onChange={(e)=>{setstudentRegisterNo(e.target.value);}} addonBefore="Register No"  style={{width : "10cm" , marginBottom:"10px"}} />
  <Input required value={studentCourse} onChange={(e)=>{setstudentCourse(e.target.value);}} addonBefore="Course"  style={{width : "10cm" , marginBottom:"10px"}} />
  <Input required value={studentFees} onChange={(e)=>{setstudentFees(e.target.value);}} addonBefore="Fees"  style={{width : "10cm" , marginBottom:"10px"}} />
        <Button type='primary' htmlType="submit"  >Add</Button>
        </form>
        </Flex >
  )
}

export default Add