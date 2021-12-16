import React, {useState} from 'react';


// to start from here
// calling the API and saving it
// https://jsonplaceholder.typicode.com/guide/   



function MyForm() {
  return (
    <form>
      <label>Enter your album's name:
        <input type="text" value={this.state.value} placeholder="Enter Album's name" />
        <button href="#text-buttons">Add</button>
      </label>
    </form>
  )
}


const AddAlbums = () => {
    return (
        <div>
            <h1>Add Albums</h1>
            <MyForm />
        </div>
    );
};

export default AddAlbums;


