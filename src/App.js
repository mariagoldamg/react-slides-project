import React from 'react';
import { data } from './data';
import { useState} from 'react';
import './App.css';

function App() {

  const [person, setPerson] = useState(0);
  const {id, name, description, image, age}  = data[person]

  const previuosPerson = () =>{
    setPerson((person =>{
      person--;
      if (person<0){
        return data.length-1
      }
      return person;
    }))
  }

  const nextPerson =() =>{
    setPerson ((person=>{person++;
    if (person>data.length-1){
      person=0;
    }
    return person;
    }))
   
  }


  return (
    <div >
      <div className='container'>
        <h1>{id} - {name}</h1>
      </div>

      <div className='container'>
        <img src={image} width="400px" alt = "pic"/>
      </div>

      <div className='container'>
        <h2>{description}</h2>
      </div>
      <div className='container'>
        <h2>{age}</h2>
      </div>

      <div className='container btn'>
        <button onClick = {previuosPerson}>Previous</button>
        <button onClick = {nextPerson}>Next</button>
      </div>
    </div>
  );
}

export default App;
