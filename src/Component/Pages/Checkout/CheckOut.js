import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contsxt/Authprovider';
import Chechcourse from './Chechcourse';



const CheckOut = () => {
    const course=useLoaderData();
    const {setchecked} =useContext(AuthContext)
    
       const hanldeclicked=(id)=>{
        const checkedCourse = course.find(c_course=> c_course.id===id);
        setchecked(checkedCourse);
    }
    
  
    return (
       
        <div >
           {course.map(check=><Chechcourse
           key={check.id}
           check={check}
           hanldeclicked={ hanldeclicked}
           ></Chechcourse>)}
        </div>
        
    );
};

export default CheckOut;