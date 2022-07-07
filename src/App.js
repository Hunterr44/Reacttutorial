import React, {useState, useEffect} from 'react';
import './App.css';

const schedule = {
  title: "CS Courses for 2022-23" ,
  "courses":{ 
    "F101" :{
      id: "F101",
      "meets" : "MWF 11:00-11:50",
      "title" : "Computer Science: Concepts, Philosophy and Connections"
    },
    "F110" :{
      "id" : "F110",
      "meets" : "MWF 10:00-10:50",
      "title" : "Intro Programming for non-majors"
    },
    "S313" :{
      "id" : "S313",
      "meets" : "TuTh 15:30-16:50",
      "title" : "Tangible Interaction Design and Learning"
  },
  "s314" :{
    "id" : "S314",
    "meets" : "TuTh 9:30-10:50",
    "title" : "Tech and Human Interaction"
  }
}
};

const Banner = ({title}) => (
  <h1>{title}</h1>
);

const CourseList = ({courses}) => (
  <div className = "container">
    { Object.values(courses).map(course => <Course key = {courses.id} Course course = { course } /> ) }
    </div>
);

const terms = {F: 'Fall', W: 'Winter', S: 'Spring'};

const getCourseTerm = course => (
  terms[course.id.charAt(0)]
);

const getCourseNumber = course => (
  course.id.slice(1, 4)
);

const Course = ({ course }) => (
  <div className="card m-1 p-2">
    <div className="card-body">
      <div className = "card-title">{getCourseTerm(course)} CS { getCourseNumber(course)}</div>
      <div className = "card-text"> {course.title}</div> 
    </div>
  </div>
);



const App = () => { 
  const [schedule, setSchedule] = useState();
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if(!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
  }
  fetchSchedule();
  }, [])

  if (!schedule) return <h1>Loading Schedule...</h1>;

  return (
    <div className = "container">
    <Banner title = { schedule.title}/>
    <CourseList courses = {schedule.courses} />
  </div>
);
};

//hello this is me


export default App;