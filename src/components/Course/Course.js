import React, { useState, useEffect } from 'react';
import fakeData from '../fakeData/Data';
import Name from '../Name/Name';
import Cart from '../Cart/Cart';



const Course = () => {
  const [courses,setCourses]=useState(fakeData);
  useEffect(()=>{
    setCourses(courses);
    console.log(courses);
  },[])
  const [cart,setCat]=useState([]);
  const handleAddCourse=course =>{
    const newCart=[...cart,course];
    setCat(newCart);
  }
  return (
    <div className="course-container">
      
      <Cart cart={cart}></Cart>
    
     
      {
          courses.map(course => <Name
            handleAddCourse={handleAddCourse}
             course={course}
             key={course.id}
             
             
             ></Name>)
        }
      </div>
  );
};

export default Course;