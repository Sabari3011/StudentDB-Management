import React from 'react'
import { Alert,Button , Space ,Typography} from 'antd'
import { DeleteOutlined , EditOutlined} from '@ant-design/icons';
import {useNavigate } from 'react-router-dom';

function Home({students ,idToDel, setidToDel , deleteHandler}) {
  let navigate = useNavigate();
  let student = students.find(student => (student.id).toString() == idToDel )
  return (
    <div>
{ idToDel!=-1 &&
  <Alert
      message= {`Are you sure want to delete the data of ${student.name} ?`}
      
      
     
      type="error"
      action={
        
<Space direction="horizontal">
          <Button onClick={(e)=>{ deleteHandler(idToDel)}} size="medium" type="primary">
            Yes
          </Button>
          <Button size="medium" type='primary' onClick={(e)=>{setidToDel(-1)}} danger >
            No
          </Button>
        </Space>
      }
    />}

      <div>
        <table style={{width:"100%"}}>
<thead>
  <th>Name</th>
  <th>Register No</th>
  <th>Course</th>
  <th>Fee</th>
  <th></th>
</thead>
<tbody>


       {
        
       students.length!=0  && students.map((s) => {
return( <tr key={s.id}>
  

  <td>{s.name}</td>
  <td>{s.registerno}</td>
  <td>{s.course}</td>
  <td>{s.fee}</td>
  <Space size={2 }>   
  <td> 
    <Button type="primary" onClick={(e)=>{
navigate("/edit/"+s.id)
    }} style={{marginRight : "10px"}} shape="circle" icon={<EditOutlined />} />

   <Button onClick={(e)=>{
    setidToDel(s.id)
   }} type="primary" danger shape="circle" icon={<DeleteOutlined />} />  </td>
  </Space>

    </tr>)
        })
        
        }
</tbody>

      </table>
      {
   students.length==0  && <h2 style={{ color : "red"}}>Please check your network !!! </h2 >
}
      </div>
    </div>
  )
}

export default Home