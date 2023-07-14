import { useEffect,useState } from "react";
import TeacherDisplay from "./TeacherDisplay";
import Axios from "axios";
import CloseButton from "../../Components/CloseButton";

function TeacherList(){

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        const fields='teacher_id class_id name'
        const url = "https://orange-ring-cello.glitch.me/teacher/restricted-teacher-list/"+fields;

        Axios.get(url)
        .then((res)=>{
            if(res.status===200)
            {
                setResData(res.data)
            }
            else if(res.status===204){
                alert("Error"+res.data[1])
            }
            
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])


    var userlist=[]
    for (let i=0;i<resData.length;i++){
        userlist.push(<TeacherDisplay sno={i+1} teacher_id={resData[i]['teacher_id']} class_id={resData[i]['class_id']} _id={resData[i]['_id']} name={resData[i]['name']}/>)
    }

    return(
        <div style={{width:"50%",marginLeft:"auto",marginRight:"auto"}}>
            <CloseButton />
            <table id="list-view-tables"  className="table col-sm mt-5" style={{border:"1px solid black" }}>
                <thead>
                <tr className="text-center">
                    <th>S.No</th>
                    <th>Teacher Id</th>
                    <th>Name</th>
                    <th>Class Id</th>
            
                    <th colspan="3">Actions</th>
                </tr>
                </thead>
                <tbody>
                {userlist}

                </tbody>
            </table>
        </div>
    )

}


export default TeacherList