import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(()=>{
      // setValue((currentState) => {
      //   console.log(currentState);
      //   const newState = currentState + 1;
      //   return newState;
      //   console.log(currentState);
      // });
        console.log('Clicked button');
        setValue(value + 1);
    },3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
