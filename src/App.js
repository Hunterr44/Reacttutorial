import React, {useState, useEffect} from 'react';
import './App.css';
import { hasConflict, terms, addScheduleTimes, getCourseNumber, getCourseTerm } from './utilities/times';
import CourseList from './components/CourseList';

const Banner = ({title}) => (
  <h1>{title}</h1>
);



// const terms = {F: 'Fall', W: 'Winter', S: 'Spring'};

// const days = ['M', 'Tu', 'W', 'Th', 'F'];





const App = () => { 
  const [schedule, setSchedule] = useState();
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if(!response.ok) throw response;
      const json = await response.json();
      setSchedule(addScheduleTimes(json));
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