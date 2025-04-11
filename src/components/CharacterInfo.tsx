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
          <span>{characterData.characterData.name}</span>
        </div>
        <div className="character-info-item">
          <label>Level:</label>
          <span>{characterData.characterData.lvl}</span>
        </div>
        <div className="character-info-item">
          <label>Class:</label>
          <span>{characterData.characterData.class}</span>
        </div>
        <div className="character-info-item">
          <label>Race:</label>
          <span>{characterData.characterData.race}</span>
        </div>
        <div className="character-info-item">
          <label>XP:</label>
          <span>{characterData.characterData.xp}</span>
        </div>
        {characterData.characterData.paragonPath && (
          <div className="character-info-item">
            <label>Paragon Path:</label>
            <span>{characterData.characterData.paragonPath}</span>
          </div>
        )}
        {characterData.characterData.portraitUrl && (
          <div className="character-portrait">
            <img src={characterData.characterData.portraitUrl} alt={`${characterData.characterData.name}'s portrait`} />
          </div>
        )}
      </div>
    </details>
  );
}; 