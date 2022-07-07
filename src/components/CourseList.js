import React, {useState, useEffect} from 'react';
import '../App.css';
import { hasConflict, terms, addScheduleTimes, getCourseNumber, getCourseTerm, toggle } from '../utilities/times';



const TermSelector = ({term, setTerm}) => (
    <div className = "btn-group">
      {
        Object.values(terms).map(value => <TermButton key = {value} term = {value} setTerm = {setTerm} checked = {value === term} />)
      }
      </div>
  );
  
  
  
const TermButton = ({term, setTerm, checked}) => (
    <>
      <input type="radio" id={term} className="btn-check" autoComplete="off" checked={checked}
      onChange = {() => setTerm(term)} />
      <label class="btn btn-success m-1 p-2" htmlFor={term}>
      { term }
      </label>
    </>
  )


const CourseList = ({courses}) => {
    const [term, setTerm] = useState('Winter');
    const [selected, setSelected] = useState([]);
    const termCourses = Object.values(courses).filter(course => term === getCourseTerm(course));
  
    return (
    <>
    <TermSelector term = {term} setTerm = {setTerm} />
    <div className = "course-list">
      { termCourses.map(course => <course key = {courses.id} Course course = { course } selected = {selected} setSelected = {setSelected} /> ) }
      </div>
      </>
  );
  };


  export default CourseList;