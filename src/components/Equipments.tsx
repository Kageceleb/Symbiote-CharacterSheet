import React from 'react';
import { CharacterSheetProps } from '../types/CharacterSheetProps';

interface EquipmentsProps {
  characterData: CharacterSheetProps['characterData'];
  handleWeaponAttackRoll: (weapon: any, type: 'normal' | 'advantage' | 'disadvantage') => void;
  rollDice: (formula: string, title: string) => void;
}

export function Equipments({ characterData, handleWeaponAttackRoll, rollDice }: EquipmentsProps) {
  return (
    <details>
      <summary className="section-header">Equipment</summary>
      <div className="equipment-section">
        <div className="equipment-category">
          <h3>Weapons</h3>
          <ul className="equipment-list">
            {characterData.equipment.weapons.map((weapon, index) => (
              <li key={`weapon-${index}`} className="weapon-item">
                <div className="weapon-name">
                  <span>{weapon.name}</span>
                </div>
                {weapon.description && <div className="weapon-description">{weapon.description}</div>}
                <div className="weapon-properties">
                  {weapon.properties && weapon.properties.join(', ')}
                </div>
                <div className="weapon-actions">
                  <div className="attack-roll-group">
                    <button
                      className="weapon-roll-btn"
                      onClick={() => handleWeaponAttackRoll(weapon, 'normal')}
                      title="Normal Attack Roll"
                    >
                      Attack (+{weapon.attackModifier})
                    </button>
                    <button
                      className="weapon-roll-btn advantage"
                      onClick={() => handleWeaponAttackRoll(weapon, 'advantage')}
                      title="Attack Roll with Advantage"
                    >
                      Adv
                    </button>
                    <button
                      className="weapon-roll-btn disadvantage"
                      onClick={() => handleWeaponAttackRoll(weapon, 'disadvantage')}
                      title="Attack Roll with Disadvantage"
                    >
                      Dis
                    </button>
                  </div>
                  <button
                    className="weapon-roll-btn"
                    onClick={() => rollDice(`${weapon.damageFormula}+${weapon.damageModifier}`, `${weapon.name} Damage`)}
                    title={`Damage: ${weapon.damageFormula}+${weapon.damageModifier}`}
                  >
                    Damage
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="equipment-category">
          <h3>Armor</h3>
          <p>{characterData.equipment.armor}</p>
        </div>

        <div className="equipment-category">
          <h3>Gear</h3>
          <ul className="equipment-list">
            {characterData.equipment.gear.map((item, index) => (
              <li key={`gear-${index}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="equipment-category">
          <h3>Magic Items</h3>
          <ul className="equipment-list">
            {characterData.equipment.magicItems.map((item, index) => (
              <li key={`magic-${index}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="wealth">
          <h3>Wealth</h3>
          <p className="gold">Gold: {characterData.wealth.gold}</p>
          <p className="silver">Silver: {characterData.wealth.silver}</p>
          <p className="copper">Copper: {characterData.wealth.copper}</p>
        </div>
      </div>
    </details>
  );
} 