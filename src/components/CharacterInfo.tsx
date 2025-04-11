import React from 'react';
import { CharacterSheetProps } from '../types/CharacterSheetProps';

interface CharacterInfoProps {
  characterData: CharacterSheetProps;
}

export const CharacterInfo: React.FC<CharacterInfoProps> = ({ characterData }) => {
  return (
    <details className="character-info-section" open>
      <summary>Character Info</summary>
      <div className="character-info-grid">
        <div className="character-info-item">
          <label>Name:</label>
          <span>{characterData.name}</span>
        </div>
        <div className="character-info-item">
          <label>Level:</label>
          <span>{characterData.lvl}</span>
        </div>
        <div className="character-info-item">
          <label>Class:</label>
          <span>{characterData.class}</span>
        </div>
        <div className="character-info-item">
          <label>Race:</label>
          <span>{characterData.race}</span>
        </div>
        <div className="character-info-item">
          <label>XP:</label>
          <span>{characterData.xp}</span>
        </div>
        {characterData.paragonPath && (
          <div className="character-info-item">
            <label>Paragon Path:</label>
            <span>{characterData.paragonPath}</span>
          </div>
        )}
        {characterData.portraitUrl && (
          <div className="character-portrait">
            <img src={characterData.portraitUrl} alt={`${characterData.name}'s portrait`} />
          </div>
        )}
      </div>
    </details>
  );
}; 