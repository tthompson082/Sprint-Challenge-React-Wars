import React from 'react';

const Character = props => {
    return (
        <div className="character">
            <p className="name">{props.character.name}</p>
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Eye Color: {props.character.eye_color}</p>
        </div>
    )
}

export default Character;