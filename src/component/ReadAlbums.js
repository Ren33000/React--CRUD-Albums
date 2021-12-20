import React from 'react';

const ReadAlbums = ({albums}) => {
    console.log(albums)
    return (
        <div>
            <h1>Read Albums </h1>
            { albums.map( album => <p key={album.id} >{album.title}</p>)}
        </div>
    );
};

export default ReadAlbums;