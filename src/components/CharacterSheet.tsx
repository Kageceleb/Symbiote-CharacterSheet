import React, { useState } from "react"
import { CharacterSheetProps, Condition } from "../types/CharacterSheetProps"
import { AbilityScores } from "./AbilityScores";
import { CharacterInfo } from "./CharacterInfo";
import { Skill } from "./Skills/Skill";

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

  const [tempHP, setTempHP] = useState(localStorage.getItem('tempHP') || characterData.health.maxHp.toString());

const handleTempHPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTempHP(event.target.value);
  localStorage.setItem('tempHP', event.target.value);
  // Here you can handle the change, e.g., update state or send to server
  console.log(`Temporary HP changed to: ${tempHP}`);
}

  // Helper functions
  const formatModifier = (modifier: number) => {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  }

  // Dice rolling function
  const rollDice = (formula: string, title: string) => {
    TS.dice.putDiceInTray([{ name: title, roll: formula }], false)
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
      <div className="character-main-row">
        <CharacterInfo characterData={characterData} />

        <div className="combat-stats">
          <h3>Base Stats</h3>
          <div className="stat-group">
            <p>HP: {characterData.health.maxHp}: <input type="number" value={tempHP} size={10} onChange={handleTempHPChange} /></p>
            <p>Temp HP: <input type="number" /></p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
              <p>Initiative: </p>
              <p
                className="ability-mod"
                onClick={() => rollDice(`1d20+${characterData.initiative}`, `${characterData.name} Initiative`)}>

                {formatModifier(characterData.initiative)}</p>
            </div>
            <div className="stat-group">
              <p>AC: {characterData.defenses.ac}</p>
            </div>
          </div>
        </div>


        {/* <Powers characterData={characterData} rollDice={rollDice} /> */}
        {/* <Equipments characterData={characterData} handleWeaponAttackRoll={handleWeaponAttackRoll} rollDice={rollDice} /> */}
        {/* <FeatsAndAbilities characterData={characterData} /> */}
      </div>
      <AbilityScores characterData={characterData} rollDice={rollDice} />
      <Skill characterData={characterData} />

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