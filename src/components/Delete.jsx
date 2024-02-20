import React from 'react'

function Delete({onDelete}) {

    return (
        <button onClick={onDelete}>X</button>
    );
}

export default Delete;