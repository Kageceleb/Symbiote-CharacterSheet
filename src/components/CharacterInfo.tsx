import React from 'react';
import { CharacterSheetProps } from '../types/CharacterSheetProps';


export const CharacterInfo: React.FC<CharacterSheetProps> = ({ characterData }) => {
  return (
    <div >
      {
        characterData.portraitUrl && (
          <div className="character-portrait-container">
            <img
              className="character-portrait"
              src={characterData.portraitUrl}
              alt={`${characterData.name}'s portrait`} />
          </div>
        )
      }
      < div className="character-info" >

        <div className="character-info-item">
          <label>Level:</label>
          <span>{characterData.lvl}</span>
        </div>
        <div>
          <div className="character-info-item">
            <label>Class:</label>
            <span>{characterData.class}</span>
          </div>
          <div className="character-info-item">
            <label>Race:</label>
            <span>{characterData.race}</span>
          </div>
        </div>
      </div >
    </div >
  );
}; 