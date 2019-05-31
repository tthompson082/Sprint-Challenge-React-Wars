import React from 'react';

import Character from './Character';

const CharacterList = props => {
    return (
        <div className="char-info">
            {props.characters.map(character => (
                <Character 
                character={character}
                key={character.name}
                />
            ))}
        </div>
    )
}

export default CharacterList;