import React from 'react'
import { useParams } from 'react-router-dom';

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 14,
    grade: "9th"
  },
  {
    id: 2,
    name: "Brian Smith",
    age: 15,
    grade: "10th"
  },
  {
    id: 3,
    name: "Chloe Martinez",
    age: 13,
    grade: "8th"
  },
  {
    id: 4,
    name: "David Lee",
    age: 16,
    grade: "11th"
  },
  {
    id: 5,
    name: "Ella Brown",
    age: 17,
    grade: "12th"
  }
];



function Student() {
    const {currId} = useParams() 
    const currentStudent = students.find(student => student.id === Number(currId))
  return (
    <div>
        <h2>{currentStudent.name}</h2>
        <h2>{currentStudent.age}</h2>
        <h2>{currentStudent.grade}</h2>
    </div>
  )
}

export default Student