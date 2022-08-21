import React from 'react';

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

function App() {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div className="App">
      <Header course={course} />
      <Part name={part1} exercises={exercises1}/>
      <Part name={part2} exercises={exercises2}/>
      <Part name={part3} exercises={exercises3}/>
    </div>
  );
}

export default App;
