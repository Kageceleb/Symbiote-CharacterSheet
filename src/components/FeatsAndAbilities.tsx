import React from 'react';
import { CharacterSheetProps } from '../types/CharacterSheetProps';

interface FeatsAndAbilitiesProps {
  characterData: CharacterSheetProps['characterData'];
}

export const FeatsAndAbilities: React.FC<FeatsAndAbilitiesProps> = ({ characterData }) => {
  return (
    <details>
      <summary className="section-header">Feats & Abilities</summary>
      <div className="feats-section">
        <h3>Feats</h3>
        <ul className="feats-list">
          {characterData.feats.map((feat, index) => (
            <li key={`feat-${index}`}>{feat}</li>
          ))}
        </ul>

        <h3>Languages</h3>
        <p className="notes-box">{characterData.languages.join(", ")}</p>

        {characterData.resistances.length > 0 && (
          <>
            <h3>Resistances & Immunities</h3>
            <p className="notes-box">{characterData.resistances.join(", ")}</p>
          </>
        )}

        <h3>Character Notes</h3>
        <p className="notes-box">{characterData.notes}</p>
      </div>
    </details>
  );
}; 