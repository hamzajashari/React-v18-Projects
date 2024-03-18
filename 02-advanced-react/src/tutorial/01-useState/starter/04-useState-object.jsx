import { useState } from 'react';

const UseStateObject = () => {
  // const [name,setName] = useState('hamza');
  // const [age,setAge] = useState('24');
  // const [hobby,setHobby] = useState('Football');
  
  // const displayPerson = () => {
  //     setName("John");
  //     setAge("30");
  //     setHobby("Basketball");
  // }

  const [person,setPerson] = useState({
    name: 'hamza',
    age: 24,
    hobby:'Football'
  });

  const displayPerson = () => {
    //setPerson({name: 'john',age:30,hobby: 'Basketball'});
    //setPerson({name:'John'});
    setPerson({...person, name:'John'});
    }
  return <>
  <h3>{person.name}</h3>
  
  <h3>{person.age}</h3>
  
  <h3>Enjoys : {person.hobby}</h3>

  <button className='btn' onClick={displayPerson}>
    Show John
  </button>
  </>;
};

export default UseStateObject;
