import React, { useState } from "react"
import { CharacterSheetProps, PowerData, Condition } from "../../types/CharacterSheetProps"
import { Skills } from "./Skills";

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

  // State for character's current conditions and powers
  const [conditions, setConditions] = useState<Condition[]>(characterData.conditions || []);
  const [powers, setPowers] = useState({
    atWill: [...characterData.powers.atWill],
    encounter: [...characterData.powers.encounter],
    daily: [...characterData.powers.daily],
    utility: [...characterData.powers.utility]
  });

  // Helper functions
  const getAbilityModifier = (abilityScore: number) => {
    return Math.floor((abilityScore - 10) / 2);
  }

  const formatModifier = (modifier: number) => {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  }

  // Helper to calculate half-level
  const getHalfLevel = () => {
    return Math.floor(characterData.lvl / 2);
  }

  // Dice rolling function
  const rollDice = (formula: string, title: string = "Dice Roll") => {
    // Parse the formula like "2d6+3"
    const diceRegex = /(\d+)d(\d+)([+-]\d+)?/;
    const match = formula.match(diceRegex);

    if (!match) return;

    const numberOfDice = parseInt(match[1]);
    const diceType = parseInt(match[2]);
    const modifier = match[3] ? parseInt(match[3]) : 0;

    // Roll the dice
    const values: number[] = [];
    for (let i = 0; i < numberOfDice; i++) {
      values.push(Math.floor(Math.random() * diceType) + 1);
    }

    // Calculate total
    const diceTotal = values.reduce((sum, value) => sum + value, 0);
    const total = diceTotal + modifier;

    // Set the result
    setDiceRollResult({
      title,
      formula,
      total,
      values,
      modifier
    });

    // Show the modal
    setShowDiceModal(true);
  }

  // Toggle power usage
  const togglePowerUsed = (powerType: 'atWill' | 'encounter' | 'daily' | 'utility', index: number) => {
    const newPowers = { ...powers };
    newPowers[powerType][index].used = !newPowers[powerType][index].used;
    setPowers(newPowers);
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

  // Reset all encounter and daily powers
  const resetPowers = () => {
    const newPowers = { ...powers };

    // Reset encounter and daily powers, leave at-will and utility untouched
    newPowers.encounter = newPowers.encounter.map(power => ({ ...power, used: false }));
    newPowers.daily = newPowers.daily.map(power => ({ ...power, used: false }));

    setPowers(newPowers);
  }

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
        <p className="xp-tracker">XP: {characterData.xp} / {30000 - 1000 + (characterData.lvl * 1000)}</p>
        {characterData.paragonPath && <p className="paragon-path">Paragon Path: {characterData.paragonPath}</p>}
        {characterData.epicDestiny && <p className="epic-destiny">Epic Destiny: {characterData.epicDestiny}</p>}
      </div>

      <details open>
        <summary className="section-header">Combat Stats</summary>
        <div className="combat-stats">
          <div className="health-section">
            <h3>Health</h3>
            <div className="stat-group">
              <p>HP: {characterData.health.currentHp}/{characterData.health.maxHp}</p>
              <p>Bloodied: {Math.floor(characterData.health.maxHp / 2)}</p>
              <p>Temp HP: {characterData.health.temporaryHp}</p>
              <p>Healing Surges: {characterData.health.surges.value}/{characterData.health.surges.max}</p>
              <p>Surge Value: {Math.floor(characterData.health.maxHp / 4)}</p>
              <p>Second Wind: {characterData.health.secondWind ? "Used" : "Available"}</p>
            </div>
          </div>

          <div className="combat-section">
            <h3>Initiative & Movement</h3>
            <div className="stat-group">
              <p>Initiative: {formatModifier(characterData.initiative)}</p>
              <p>Speed: {characterData.speed} squares</p>
              <p>Action Points: {characterData.actionPoints}</p>
            </div>
          </div>

          <div className="defenses-section">
            <h3>Defenses</h3>
            <div className="stat-group">
              <p>AC: {characterData.defenses.ac}</p>
              <p>Fortitude: {characterData.defenses.fortitude}</p>
              <p>Reflex: {characterData.defenses.reflex}</p>
              <p>Will: {characterData.defenses.will}</p>
            </div>
          </div>

          <div className="saving-throws-section">
            <h3>Saving Throws</h3>
            <div className="stat-group">
              <p>Base: {formatModifier(characterData.savingThrows.base)}</p>
              <p>Death Saving Throws: {characterData.savingThrows.deathSavingThrows}/3</p>
              {characterData.savingThrows.modifiers && <p>Modifiers: {characterData.savingThrows.modifiers}</p>}
            </div>
          </div>

          {/* Conditions Section */}
          <div className="conditions-section">
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
            <button className="add-condition-btn" onClick={resetPowers} style={{ marginLeft: '10px' }}>
              Reset Powers
            </button>
          </div>
        </div>
      </details>

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

      {/* <details>
        <summary className="section-header">Skills</summary>
        <div className="skills-grid">
          <div className="skill">
            <span>Acrobatics (DEX):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.acrobatics), "Acrobatics Check")}>
              {formatModifier(characterData.skills.acrobatics)}
            </span>
          </div>
          <div className="skill">
            <span>Arcana (INT):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.arcana), "Arcana Check")}>
              {formatModifier(characterData.skills.arcana)}
            </span>
          </div>
          <div className="skill">
            <span>Athletics (STR):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.athletics), "Athletics Check")}>
              {formatModifier(characterData.skills.athletics)}
            </span>
          </div>
          <div className="skill">
            <span>Deception (CHA):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.deception), "Deception Check")}>
              {formatModifier(characterData.skills.deception)}
            </span>
          </div>
          <div className="skill">
            <span>Performance (CHA):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.performance), "Performance Check")}>
              {formatModifier(characterData.skills.performance)}
            </span>
          </div>
          <div className="skill">
            <span>Investigation (WIS):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.investigation), "Investigation Check")}>
              {formatModifier(characterData.skills.investigation)}
            </span>
          </div>
          <div className="skill">
            <span>Persuasion (CON):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.persuasion), "Persuasion Check")}>
              {formatModifier(characterData.skills.persuasion)}
            </span>
          </div>
          <div className="skill">
            <span>Medicine (WIS):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.medicine), "Medicine Check")}>
              {formatModifier(characterData.skills.medicine)}
            </span>
          </div>
          <div className="skill">
            <span>History (INT):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.history), "History Check")}>
              {formatModifier(characterData.skills.history)}
            </span>
          </div>
          <div className="skill">
            <span>Insight (WIS):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.insight), "Insight Check")}>
              {formatModifier(characterData.skills.insight)}
            </span>
          </div>
          <div className="skill">
            <span>Intimidation (CHA):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.intimidation), "Intimidation Check")}>
              {formatModifier(characterData.skills.intimidation)}
            </span>
          </div>
          <div className="skill">
            <span>Nature (WIS):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.nature), "Nature Check")}>
              {formatModifier(characterData.skills.nature)}
            </span>
          </div>
          <div className="skill">
            <span>Perception (WIS):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.perception), "Perception Check")}>
              {formatModifier(characterData.skills.perception)}
            </span>
          </div>
          <div className="skill">
            <span>Religion (INT):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.religion), "Religion Check")}>
              {formatModifier(characterData.skills.religion)}
            </span>
          </div>
          <div className="skill">
            <span>Stealth (DEX):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.stealth), "Stealth Check")}>
              {formatModifier(characterData.skills.stealth)}
            </span>
          </div>
          <div className="skill">
            <span>Survival (CHA):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.survival), "Survival Check")}>
              {formatModifier(characterData.skills.survival)}
            </span>
          </div>
          <div className="skill">
            <span>SleightOfHand (DEX):</span>
            <span className="skill-mod" onClick={() => rollDice("1d20" + formatModifier(characterData.skills.sleightofhand), "SleightOfHand Check")}>
              {formatModifier(characterData.skills.sleightofhand)}
            </span>
          </div>
        </div>
      </details> */}

      <Skills characterData={characterData} />
      <details>
        <summary className="section-header">Powers</summary>
        <div className="powers-section">
          <div className="power-category">
            <h3>At-Will Powers</h3>
            <ul className="power-list">
              {powers.atWill.map((power, index) => (
                <li key={`at-will-${index}`} className={`power-item power-atwill ${power.used ? 'used' : ''}`}>
                  <div className="power-name">
                    <span>{power.name}</span>
                  </div>
                  {power.description && <div className="power-description">{power.description}</div>}
                  <div className="power-actions">
                    {power.diceRoll && (
                      <button
                        className="power-roll-btn"
                        onClick={() => rollDice(power.diceRoll!, `${power.name}`)}
                      >
                        Roll {power.diceRoll}
                      </button>
                    )}
                    <button
                      className={`power-toggle-btn ${power.used ? 'used' : ''}`}
                      onClick={() => togglePowerUsed('atWill', index)}
                    >
                      {power.used ? 'Mark Available' : 'Mark Used'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="power-category">
            <h3>Encounter Powers</h3>
            <ul className="power-list">
              {powers.encounter.map((power, index) => (
                <li key={`encounter-${index}`} className={`power-item power-encounter ${power.used ? 'used' : ''}`}>
                  <div className="power-name">
                    <span>{power.name}</span>
                  </div>
                  {power.description && <div className="power-description">{power.description}</div>}
                  <div className="power-actions">
                    {power.diceRoll && (
                      <button
                        className="power-roll-btn"
                        onClick={() => rollDice(power.diceRoll!, `${power.name}`)}
                      >
                        Roll {power.diceRoll}
                      </button>
                    )}
                    <button
                      className={`power-toggle-btn ${power.used ? 'used' : ''}`}
                      onClick={() => togglePowerUsed('encounter', index)}
                    >
                      {power.used ? 'Mark Available' : 'Mark Used'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="power-category">
            <h3>Daily Powers</h3>
            <ul className="power-list">
              {powers.daily.map((power, index) => (
                <li key={`daily-${index}`} className={`power-item power-daily ${power.used ? 'used' : ''}`}>
                  <div className="power-name">
                    <span>{power.name}</span>
                  </div>
                  {power.description && <div className="power-description">{power.description}</div>}
                  <div className="power-actions">
                    {power.diceRoll && (
                      <button
                        className="power-roll-btn"
                        onClick={() => rollDice(power.diceRoll!, `${power.name}`)}
                      >
                        Roll {power.diceRoll}
                      </button>
                    )}
                    <button
                      className={`power-toggle-btn ${power.used ? 'used' : ''}`}
                      onClick={() => togglePowerUsed('daily', index)}
                    >
                      {power.used ? 'Mark Available' : 'Mark Used'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="power-category">
            <h3>Utility Powers</h3>
            <ul className="power-list">
              {powers.utility.map((power, index) => (
                <li key={`utility-${index}`} className={`power-item power-utility ${power.used ? 'used' : ''}`}>
                  <div className="power-name">
                    <span>{power.name}</span>
                  </div>
                  {power.description && <div className="power-description">{power.description}</div>}
                  <div className="power-actions">
                    {power.diceRoll && (
                      <button
                        className="power-roll-btn"
                        onClick={() => rollDice(power.diceRoll!, `${power.name}`)}
                      >
                        Roll {power.diceRoll}
                      </button>
                    )}
                    <button
                      className={`power-toggle-btn ${power.used ? 'used' : ''}`}
                      onClick={() => togglePowerUsed('utility', index)}
                    >
                      {power.used ? 'Mark Available' : 'Mark Used'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>

      <details>
        <summary className="section-header">Equipment</summary>
        <div className="equipment-section">
          <div className="equipment-category">
            <h3>Weapons</h3>
            <ul className="equipment-list">
              {characterData.equipment.weapons.map((weapon, index) => (
                <li key={`weapon-${index}`}>{weapon}</li>
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