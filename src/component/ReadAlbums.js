import React from 'react';

const ReadAlbums = ({albums}) => {
    return (
        <div>
            <h1>Read Albums </h1>
            {albums.map(album => <p>{album}</p>)}
        </div>
    );
};

export default ReadAlbums;