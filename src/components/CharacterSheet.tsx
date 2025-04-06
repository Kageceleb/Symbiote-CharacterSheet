import React from "react"
import { CharacterSheetProps } from "../../types/CharacterSheetProps"

export const CharacterSheet: React.FC<CharacterSheetProps> = ({ characterData }) => {
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

  return (
    <div className="character-sheet">
      <h1>{characterData.name}</h1>
      
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
        </div>
      </details>

      <details>
        <summary className="section-header">Ability Scores</summary>
        <div className="abilities-grid">
          <div className="ability">
            <h3>STR</h3>
            <p className="ability-score">{characterData.stats.strength}</p>
            <p className="ability-mod">{formatModifier(getAbilityModifier(characterData.stats.strength))}</p>
          </div>
          <div className="ability">
            <h3>DEX</h3>
            <p className="ability-score">{characterData.stats.dexterity}</p>
            <p className="ability-mod">{formatModifier(getAbilityModifier(characterData.stats.dexterity))}</p>
          </div>
          <div className="ability">
            <h3>CON</h3>
            <p className="ability-score">{characterData.stats.constitution}</p>
            <p className="ability-mod">{formatModifier(getAbilityModifier(characterData.stats.constitution))}</p>
          </div>
          <div className="ability">
            <h3>INT</h3>
            <p className="ability-score">{characterData.stats.intelligence}</p>
            <p className="ability-mod">{formatModifier(getAbilityModifier(characterData.stats.intelligence))}</p>
          </div>
          <div className="ability">
            <h3>WIS</h3>
            <p className="ability-score">{characterData.stats.wisdom}</p>
            <p className="ability-mod">{formatModifier(getAbilityModifier(characterData.stats.wisdom))}</p>
          </div>
          <div className="ability">
            <h3>CHA</h3>
            <p className="ability-score">{characterData.stats.charisma}</p>
            <p className="ability-mod">{formatModifier(getAbilityModifier(characterData.stats.charisma))}</p>
          </div>
        </div>
      </details>

      <details>
        <summary className="section-header">Skills</summary>
        <div className="skills-grid">
          <div className="skill">
            <span>Acrobatics (DEX):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.acrobatics)}</span>
          </div>
          <div className="skill">
            <span>Arcana (INT):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.arcana)}</span>
          </div>
          <div className="skill">
            <span>Athletics (STR):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.athletics)}</span>
          </div>
          <div className="skill">
            <span>Bluff (CHA):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.bluff)}</span>
          </div>
          <div className="skill">
            <span>Diplomacy (CHA):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.diplomacy)}</span>
          </div>
          <div className="skill">
            <span>Dungeoneering (WIS):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.dungeoneering)}</span>
          </div>
          <div className="skill">
            <span>Endurance (CON):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.endurance)}</span>
          </div>
          <div className="skill">
            <span>Heal (WIS):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.heal)}</span>
          </div>
          <div className="skill">
            <span>History (INT):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.history)}</span>
          </div>
          <div className="skill">
            <span>Insight (WIS):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.insight)}</span>
          </div>
          <div className="skill">
            <span>Intimidate (CHA):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.intimidate)}</span>
          </div>
          <div className="skill">
            <span>Nature (WIS):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.nature)}</span>
          </div>
          <div className="skill">
            <span>Perception (WIS):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.perception)}</span>
          </div>
          <div className="skill">
            <span>Religion (INT):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.religion)}</span>
          </div>
          <div className="skill">
            <span>Stealth (DEX):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.stealth)}</span>
          </div>
          <div className="skill">
            <span>Streetwise (CHA):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.streetwise)}</span>
          </div>
          <div className="skill">
            <span>Thievery (DEX):</span> 
            <span className="skill-mod">{formatModifier(characterData.skills.thievery)}</span>
          </div>
        </div>
      </details>

      <details>
        <summary className="section-header">Powers</summary>
        <div className="powers-section">
          <div className="power-category">
            <h3>At-Will Powers</h3>
            <ul className="power-list">
              {characterData.powers.atWill.map((power, index) => (
                <li key={`at-will-${index}`} className="power-atwill">{power}</li>
              ))}
            </ul>
          </div>
          
          <div className="power-category">
            <h3>Encounter Powers</h3>
            <ul className="power-list">
              {characterData.powers.encounter.map((power, index) => (
                <li key={`encounter-${index}`} className="power-encounter">{power}</li>
              ))}
            </ul>
          </div>
          
          <div className="power-category">
            <h3>Daily Powers</h3>
            <ul className="power-list">
              {characterData.powers.daily.map((power, index) => (
                <li key={`daily-${index}`} className="power-daily">{power}</li>
              ))}
            </ul>
          </div>
          
          <div className="power-category">
            <h3>Utility Powers</h3>
            <ul className="power-list">
              {characterData.powers.utility.map((power, index) => (
                <li key={`utility-${index}`} className="power-utility">{power}</li>
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
    </div>
  );
}