import React, {useState} from 'react';


 const Fun = () => {
    const[name, setName]= useState("Sasidhar");
  return (
    <div>Welcome {name}</div>
  )
}

export default Fun;