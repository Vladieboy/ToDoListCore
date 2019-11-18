
import React, { Component, useState } from 'react';

export default ({}) => {
  // const dateObj = new Date();
  // const date = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`
 const [state, setState] = useState({
  Title: "",
      Location: "",
      Time: "",
      Notify: 0,
 })

  const handleChange = (e) => {
    setState({
    [e.target.name]: e.target.value
    })
  }

 const handleSubmit = () =>{
      console.log(state)

const data = JSON.stringify({
    Title: state.Title,
    Location: state.Location,
    Time: state.Time,
    Notify: state.Notify
})

console.log(data)
      const resp = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        //   'Content-Type': 'text/plain'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: data // body data type must match "Content-Type" header
      }


      fetch('api/ToDo/PostToDo', resp).then(r => console.log(r))


  }


  
    return (
        <form>
        Title:<br/>
         <input type="text"  onBlur={(e) => handleChange(e)} name="Title" /><br/>
        Location:<br/>
         <input type="text" onBlur={(e) => handleChange(e)} name="Location" /><br/>
        Notify:<br/>
         <input type="number" onBlur={(e) => handleChange(e)} name="Notify" /><br/>
        Time:<br/>
         <input type="date"  onBlur={(e) => handleChange(e)} name="Time" /><br/>
         <button onClick={handleSubmit}>Submit</button>
               </form>
    );
  
}