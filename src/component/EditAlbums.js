import React from 'react';

function MyForm() {
  return (
    <form>
      <label>Enter your album's name:
        <input type="text" />
      </label>
    </form>
  )
}


fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});



const EditAlbum = () => {
    return (
        <div>
            <h1>Edit Album</h1>
            <MyForm />
        </div>
    );
};

export default EditAlbum;