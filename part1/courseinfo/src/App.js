import React from 'react';

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content.name} {props.content.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part content={props.content[0]} />
        <Part content={props.content[1]} />
        <Part content={props.content[2]} />
    </div>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div className="App">
      <Header course={course.name} />
      <Content content={course.parts} />
    </div>
  );
}

export default App;
