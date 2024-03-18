import data from "../../../data.js";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // const newPeople = people.filter((p) => p.id !== id);
    setPeople(people.filter((p) => p.id !== id));
  };
  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" className="btn" onClick={()=>removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" style={{margin: '2rem'}} onClick={clearAllItems}>Clear Items</button>
    </div>
  );
};

export default UseStateArray;
