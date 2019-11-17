
import React, { Component } from 'react';

export default class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        Title: "",
        Location: "",
        Time: "",
        Notify: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

//   incrementCounter() {
//     this.setState({
//       currentCount: this.state.currentCount + 1
//     });
//   }

  handleChange(e) {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  handleSubmit(){
      console.log(this.state)

const data = JSON.stringify({
    Title: this.state.Title,
    Location: this.state.Location,
    Time: this.state.Time,
    Notify: this.state.Notify
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


  render() {
    return (
        <form>
        Title:<br/>
         <input type="text"  onBlur={(e) => this.handleChange(e)} name="Title" /><br/>
        Location:<br/>
         <input type="text" onBlur={(e) => this.handleChange(e)} name="Location" /><br/>
        Notify:<br/>
         <input type="number" onBlur={(e) => this.handleChange(e)} name="Notify" /><br/>
        Time:<br/>
         <input type="date"  onBlur={(e) => this.handleChange(e)} name="Time" /><br/>
         <button onClick={this.handleSubmit}>Submit</button>
               </form>
    );
  }
}