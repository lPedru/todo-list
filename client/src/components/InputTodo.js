import React, { Fragment, useState } from "react";

const InputTodo = () => {

  const [description, setDescription] = useState('');

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const data = {
        title: 'test',
        description: description,
        done: false
      };
      console.log(data);
      const response = await fetch('http://localhost:5000/task/', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      console.log(response);
    }
    catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        /> 
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTodo;