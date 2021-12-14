import React from 'react';



const SaveAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums', {
    method: 'POST',
    body: JSON.stringify({
        name: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    }

// to start from here
// calling the API and saving it
// https://jsonplaceholder.typicode.com/guide/   
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

}

function MyForm() {
  return (
    <form>
      <label>Enter your album's name:
        <input type="text" value={this.state.value} onClick= {SaveAlbums} placeholder="Enter Album's name" />
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


