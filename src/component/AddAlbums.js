// to start from here
// calling the API and saving it
// https://jsonplaceholder.typicode.com/guide/   

const AddAlbums = ({setAlbums, albums}) => {

  const addAlbum = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.album.value)
    fetch('https://jsonplaceholder.typicode.com/users/1/albums', {
      method: 'POST',
      body: JSON.stringify({
        title: event.currentTarget.album.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setAlbums([data, ...albums])
    });
  }
  return (
    <div>
      <h1>Add Albums</h1>
      <form onSubmit={addAlbum} >
        <label>Enter your album's name:
          <input type="text" name="album" placeholder="Enter Album's name" />
          <button href="#text-buttons">Add</button>
        </label>
      </form>
    </div>
  );
};

export default AddAlbums;