import React, { useState } from 'react';
import { CharacterSheetProps, PowerData } from '../types/CharacterSheetProps';

interface PowersProps {
  characterData: CharacterSheetProps['characterData'];
  rollDice: (formula: string, title: string) => void;
}

export const Powers: React.FC<PowersProps> = ({ characterData, rollDice }) => {
  const [powers, setPowers] = useState({
    atWill: [...characterData.powers.atWill],
    encounter: [...characterData.powers.encounter],
    daily: [...characterData.powers.daily],
    utility: [...characterData.powers.utility]
  });

  const togglePowerUsed = (powerType: 'atWill' | 'encounter' | 'daily' | 'utility', index: number) => {
    const newPowers = { ...powers };
    newPowers[powerType][index].used = !newPowers[powerType][index].used;
    setPowers(newPowers);
  }

  const resetPowers = () => {
    const newPowers = { ...powers };
    newPowers.atWill = newPowers.atWill.map(power => ({ ...power, used: false }));
    newPowers.encounter = newPowers.encounter.map(power => ({ ...power, used: false }));
    newPowers.daily = newPowers.daily.map(power => ({ ...power, used: false }));
    newPowers.utility = newPowers.utility.map(power => ({ ...power, used: false }));
    setPowers(newPowers);
  }

  return (
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
        <button className="add-condition-btn" onClick={resetPowers} style={{ marginLeft: '10px' }}>
          Reset Powers
        </button>
      </div>
    </details>
  );
}; 