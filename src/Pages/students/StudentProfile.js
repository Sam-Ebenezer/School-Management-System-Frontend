import React from 'react'
import '../students/studentStyles/StudentProfile.css'




import { useState,useEffect } from 'react'
import Axios from 'axios'
import { useLocation } from 'react-router-dom'
import CloseButton from '../../Components/CloseButton'


function StudentProfile() {

    const location=useLocation()

    const [classData,setClassData] = useState([]);

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const obj={student_id:location.state.student_id}
        

        const url = "https://orange-ring-cello.glitch.me/student/specific-student-list"
        Axios.post(url,obj)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data[0])
                setClassData(res.data[0]["class_id"])
              
            }
            else if(res.status===204){
                alert("EMPTY LIST")
            }
            else{
                alert(res.status)
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])




  return (
    <div style={{width:"50%",marginLeft:"auto",marginRight:"auto"}}>
    <CloseButton/>
    <h3 class="text-center mb-4 mt-2 text-decoration-underline">STUDENT PROFILE</h3>
            <table id="list-view-tables"  className="table col-sm mt-5" style={{border:"1px solid black" }} >
                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Student Id</td>
                    <td>{resData.student_id}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Name</td>
                    <td>{resData.name}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Class</td>
                    <td>{classData.class}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Section</td>
                    <td>{classData.section}</td>
                </tr>


                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Age</td>
                    <td>{resData.age}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Gender</td>
                    <td>{resData.gender}</td>
                </tr>
                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Address</td>
                    <td>{resData.address}</td>
                </tr>
                

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Phone Number</td>
                    <td>{resData.phone_no}</td>
                </tr>

                <tr>
                    <td style={{width:"20px",fontWeight:"bold" }}>Email</td>
                    <td>{resData.email}</td>
                </tr>
               
               
            </table>

            
    </div>
  )
}

export default StudentProfile