import React, {useState, useEffect} from 'react';
import './App.css';
import { hasConflict, terms, addScheduleTimes, getCourseNumber, getCourseTerm } from './utilities/times';
import CourseList from './components/CourseList';
import { useData } from './utilities/firebase.js';

const Banner = ({title}) => (
  <h1>{title}</h1>
);



// const terms = {F: 'Fall', W: 'Winter', S: 'Spring'};

// const days = ['M', 'Tu', 'W', 'Th', 'F'];





const App = () => {
  const [schedule, loading, error] = useData('/', addScheduleTimes); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the schedule...</h1>

  return (
    <div className="container">
      <Banner title={ schedule.title } />
      <CourseList courses={ schedule.courses } />
    </div>
  );
};

//hello this is me


export default App;