import React, { useState } from "react"
import { CharacterSheetProps, Condition } from "../types/CharacterSheetProps"
import { Skills } from "./Skills";
import { AbilityScores } from "./AbilityScores";
import { Powers } from "./Powers";
import { FeatsAndAbilities } from "./FeatsAndAbilities";
import { Equipments } from "./Equipments";

export const CharacterSheet: React.FC<CharacterSheetProps> = ({ characterData }) => {
  // State for dice roll modal
  const [showDiceModal, setShowDiceModal] = useState(false);
  const [diceRollResult, setDiceRollResult] = useState<{
    title: string;
    formula: string;
    total: number;
    values: number[];
    modifier: number;
  } | null>(null);

  // State for character's current conditions
  const [conditions, setConditions] = useState<Condition[]>(characterData.conditions || []);

  // Add a new state for tracking roll type
  const [rollType, setRollType] = useState<'normal' | 'advantage' | 'disadvantage'>('normal');

  // Helper functions
  const formatModifier = (modifier: number) => {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  }

  // Dice rolling function
  const rollDice = (formula: string, title: string) => {
    if (typeof TS === 'undefined' || !TS.dice) {
      throw new Error('TS.dice is not available');
    }

    TS.dice.putDiceInTray([{ name: title, roll: formula }], false);
  }

  // Add a condition
  const addCondition = () => {
    const newCondition: Condition = {
      name: "New Condition",
      duration: "Until end of next turn",
      description: "Describe the condition effects here"
    };
    setConditions([...conditions, newCondition]);
  }

  // Remove a condition
  const removeCondition = (index: number) => {
    const newConditions = [...conditions];
    newConditions.splice(index, 1);
    setConditions(newConditions);
  }

  // Add a function to handle weapon attack rolls
  const handleWeaponAttackRoll = (weapon: typeof characterData.equipment.weapons[0], rollType: 'normal' | 'advantage' | 'disadvantage') => {
    const diceCount = rollType === 'normal' ? 1 : 2;
    const formula = `${diceCount}d20+${weapon.attackModifier}`;

    // Use TS.dice system for weapon attacks
    TS.dice.putDiceInTray([{
      name: `${weapon.name} Attack (${rollType})`,
      roll: formula
    }], false);
  };

  return (
    <div className="character-sheet">
      <h1>{characterData.name}</h1>

      {/* Character Portrait */}
      {characterData.portraitUrl && (
        <div className="character-portrait-container">
          <img
            src={characterData.portraitUrl}
            alt={`Portrait of ${characterData.name}`}
            className="character-portrait"
          />
        </div>
      )}

      <div className="character-header">
        <p className="character-race-class">Level {characterData.lvl} {characterData.race} {characterData.class}</p>
      </div>

      <details open>
        <summary className="section-header">Combat Stats</summary>
        <div className="combat-stats">
          <div className="health-section">
            <h3>Base Stats</h3>
            <div className="stat-group">
              <p>HP: {characterData.health.currentHp}/<input type="text" /> </p>
              <p>Temp HP: <input type="text" /> </p>
              <p>Initiative: {formatModifier(characterData.initiative)}</p>

            </div>
          </div>

          {/* <div className="combat-section">
            <h3>Initiative</h3>
            <div className="stat-group">
              <p>Initiative: {formatModifier(characterData.initiative)}</p>
              <p>Speed: {characterData.speed} squares</p>
            </div>
          </div> */}

          <div className="defenses-section">
            <h3>Defenses</h3>
            <div className="stat-group">
              <p>AC: {characterData.defenses.ac}</p>
              <p>Strenght: + {(Math.floor((characterData.stats.strength - 10) / 2)) + (characterData.defenses.strength ? characterData.proficiencyBonus : 0)}</p>
              <p>Dexterity: + {(Math.floor((characterData.stats.dexterity - 10) / 2)) + (characterData.defenses.dexterity ? characterData.proficiencyBonus : 0)}</p>
              <p>Constitution: + {(Math.floor((characterData.stats.constitution - 10) / 2)) + (characterData.defenses.constitution ? characterData.proficiencyBonus : 0)}</p>
              <p>Intelligence: + {(Math.floor((characterData.stats.intelligence - 10) / 2)) + (characterData.defenses.intelligence ? characterData.proficiencyBonus : 0)}</p>
              <p>Wisdom: + {(Math.floor((characterData.stats.wisdom - 10) / 2)) + (characterData.defenses.wisdom ? characterData.proficiencyBonus : 0)}</p>
              <p>Charisma: + {(Math.floor((characterData.stats.charisma - 10) / 2)) + (characterData.defenses.charisma ? characterData.proficiencyBonus : 0)}</p>
            </div>
          </div>

          {/* <div className="saving-throws-section">
            <h3>Saving Throws</h3>
            <div className="stat-group">
              <p>Death Saving Throws: {characterData.deathSavingThrows}/3</p>
            </div>
          </div> */}

          {/* Conditions Section */}
          {/* <div className="conditions-section">
            <h3>Conditions</h3>
            <div className="conditions-list">
              {conditions.length === 0 ? (
                <p>No active conditions</p>
              ) : (
                conditions.map((condition, index) => (
                  <div key={`condition-${index}`} className="condition">
                    <span className="condition-name">{condition.name}</span>
                    <span className="condition-duration">{condition.duration}</span>
                    {condition.description && (
                      <>
                        <span className="condition-info">i</span>
                        <div className="condition-description">{condition.description}</div>
                      </>
                    )}
                    <button
                      className="remove-condition-btn"
                      onClick={() => removeCondition(index)}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
            <button className="add-condition-btn" onClick={addCondition}>
              Add Condition
            </button>
          </div> */}
        </div>
      </details>

      <AbilityScores characterData={characterData} rollDice={rollDice} />
      <Skills characterData={characterData} />
      {/* <Powers characterData={characterData} rollDice={rollDice} /> */}
      {/* <Equipments characterData={characterData} handleWeaponAttackRoll={handleWeaponAttackRoll} rollDice={rollDice} /> */}
      {/* <FeatsAndAbilities characterData={characterData} /> */}

      {/* Dice Roll Modal */}
      <div className={`dice-roll-modal ${showDiceModal ? 'show' : ''}`} onClick={() => setShowDiceModal(false)}>
        <div className="dice-roll-content" onClick={(e) => e.stopPropagation()}>
          {diceRollResult && (
            <>
              <h2 className="dice-roll-title">{diceRollResult.title}</h2>
              <div className="dice-roll-result">{diceRollResult.total}</div>
              <div className="dice-roll-details">
                <div className="dice-roll-formula">{diceRollResult.formula}</div>
                <div className="dice-values">
                  {diceRollResult.values.map((value, index) => (
                    <span key={index} className="die-value">{value}</span>
                  ))}
                </div>
                {diceRollResult.modifier !== 0 && (
                  <div className="dice-roll-modifiers">
                    {diceRollResult.modifier >= 0 ?
                      `+${diceRollResult.modifier} modifier` :
                      `${diceRollResult.modifier} modifier`}
                  </div>
                )}
              </div>
              <button className="close-modal-btn" onClick={() => setShowDiceModal(false)}>
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}