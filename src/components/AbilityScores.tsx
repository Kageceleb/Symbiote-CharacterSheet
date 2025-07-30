import React from 'react';
import { CharacterSheetProps } from '../types/CharacterSheetProps';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

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
        {Object.entries(characterData.stats).map(([name, stat]) => (
          <div key={name} className="ability">
            <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <p className="ability-score">{stat.value}</p>
            <p
              className="ability-mod"
              onClick={() => rollDice(`1d20${formatModifier(getAbilityModifier(stat.value))}`, `${name} Check`)}
            >
              {formatModifier(getAbilityModifier(stat.value))}
            </p>
            {stat.saving ? (
              <VerifiedUserIcon className="saving-icon" />
            ) : (
              <ShieldOutlinedIcon className="saving-icon" />
            )}
            <p
              className="ability-mod"
              onClick={() => rollDice(`1d20${formatModifier(getAbilityModifier(stat.value + (stat.saving ? characterData.proficiencyBonus : 0)))}`, `${name} Saving Throw`)}>
              {formatModifier(getAbilityModifier(stat.value + (stat.saving ? characterData.proficiencyBonus : 0)))}
            </p>
          </div>
        ))}
      </div>
    </details >
  );
}; 