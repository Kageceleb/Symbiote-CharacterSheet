import React from 'react';
import { CharacterSheetProps } from '../types/CharacterSheetProps';

interface AbilityScoresProps {
  characterData: CharacterSheetProps['characterData'];
  rollDice: (formula: string, title: string) => void;
}

export const AbilityScores: React.FC<AbilityScoresProps> = ({ characterData, rollDice }) => {
  const getAbilityModifier = (abilityScore: number) => {
    return Math.floor((abilityScore - 10) / 2);
  }

  const formatModifier = (modifier: number) => {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  }

  return (
    <details>
      <summary className="section-header">Ability Scores</summary>
      <div className="abilities-grid">
        <div className="ability">
          <h3>STR</h3>
          <p className="ability-score">{characterData.stats.strength}</p>
          <p
            className="ability-mod"
            onClick={() => rollDice("1d20" + formatModifier(getAbilityModifier(characterData.stats.strength)), "Strength Check")}
          >
            {formatModifier(getAbilityModifier(characterData.stats.strength))}
          </p>
        </div>
        <div className="ability">
          <h3>DEX</h3>
          <p className="ability-score">{characterData.stats.dexterity}</p>
          <p
            className="ability-mod"
            onClick={() => rollDice("1d20" + formatModifier(getAbilityModifier(characterData.stats.dexterity)), "Dexterity Check")}
          >
            {formatModifier(getAbilityModifier(characterData.stats.dexterity))}
          </p>
        </div>
        <div className="ability">
          <h3>CON</h3>
          <p className="ability-score">{characterData.stats.constitution}</p>
          <p
            className="ability-mod"
            onClick={() => rollDice("1d20" + formatModifier(getAbilityModifier(characterData.stats.constitution)), "Constitution Check")}
          >
            {formatModifier(getAbilityModifier(characterData.stats.constitution))}
          </p>
        </div>
        <div className="ability">
          <h3>INT</h3>
          <p className="ability-score">{characterData.stats.intelligence}</p>
          <p
            className="ability-mod"
            onClick={() => rollDice("1d20" + formatModifier(getAbilityModifier(characterData.stats.intelligence)), "Intelligence Check")}
          >
            {formatModifier(getAbilityModifier(characterData.stats.intelligence))}
          </p>
        </div>
        <div className="ability">
          <h3>WIS</h3>
          <p className="ability-score">{characterData.stats.wisdom}</p>
          <p
            className="ability-mod"
            onClick={() => rollDice("1d20" + formatModifier(getAbilityModifier(characterData.stats.wisdom)), "Wisdom Check")}
          >
            {formatModifier(getAbilityModifier(characterData.stats.wisdom))}
          </p>
        </div>
        <div className="ability">
          <h3>CHA</h3>
          <p className="ability-score">{characterData.stats.charisma}</p>
          <p
            className="ability-mod"
            onClick={() => rollDice("1d20" + formatModifier(getAbilityModifier(characterData.stats.charisma)), "Charisma Check")}
          >
            {formatModifier(getAbilityModifier(characterData.stats.charisma))}
          </p>
        </div>
      </div>
    </details>
  );
}; 