import React, { useState } from "react"
import { CharacterSheetProps, PowerData, Condition } from "../types/CharacterSheetProps"

const modifier: (abilityScore: number) => number = (abilityScore: number) => {
    return Math.floor((abilityScore - 10) / 2);
}

export const Skills: React.FC<CharacterSheetProps> = ({ characterData }) => {
    // State for dice roll modal
    const [showDiceModal, setShowDiceModal] = useState(false);
    const [diceRollResult, setDiceRollResult] = useState<{
        title: string;
        formula: string;
        total: number;
        values: number[];
        modifier: number;
    } | null>(null);

    // Helper function for dice rolling
    const rollDice = (formula: string, title: string = "Dice Roll") => {
        // Use TS.dice system instead of local implementation
        TS.dice.putDiceInTray([{ name: title, roll: formula }], false);
    }

    // Helper function to format modifiers
    const formatModifier = (mod: number) => {
        return mod >= 0 ? `+${mod}` : `${mod}`;
    }

    return (
        <details>
            <summary className="section-header">Skills</summary>
            <div className="skills-grid">
                <div className="skill">
                    {/* "Your ability to perform acrobatic stunts, maintain balance, and move with agility." */}
                    <span>Acrobatics (DEX):</span>
                    <span 
                        className="skill-mod clickable"
                        data-testid="acrobatics-modifier"
                        onClick={() => {
                            const mod = characterData.skills.acrobatics ? 
                                modifier(characterData.stats.dexterity) + characterData.proficiencyBonus :
                                modifier(characterData.stats.dexterity);
                            rollDice(`1d20${formatModifier(mod)}`, "Acrobatics Check");
                        }}
                    >
                        {characterData.skills.acrobatics ?
                            <p>{formatModifier(modifier(characterData.stats.dexterity) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.dexterity))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    {/* "Your ability to calm, train, and interact with animals." */}
                    <span>Animal Handling (WIS):</span>
                    <span 
                        className="skill-mod clickable"
                        data-testid="animal-handling-modifier"
                        onClick={() => {
                            const mod = characterData.skills.animalHandling ? 
                                modifier(characterData.stats.wisdom) + characterData.proficiencyBonus :
                                modifier(characterData.stats.wisdom);
                            rollDice(`1d20${formatModifier(mod)}`, "Animal Handling Check");
                        }}
                    >
                        {characterData.skills.animalHandling ?
                            <p>{formatModifier(modifier(characterData.stats.wisdom) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.wisdom))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    {/* "Your knowledge of magic, magical items, and the planes of existence." */}
                    <span>Arcana (INT):</span>
                    <span 
                        className="skill-mod clickable"
                        data-testid="arcana-modifier"
                        onClick={() => {
                            const mod = characterData.skills.arcana ? 
                                modifier(characterData.stats.intelligence) + characterData.proficiencyBonus :
                                modifier(characterData.stats.intelligence);
                            rollDice(`1d20${formatModifier(mod)}`, "Arcana Check");
                        }}
                    >
                        {characterData.skills.arcana ?
                            <p>{formatModifier(modifier(characterData.stats.intelligence) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.intelligence))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    {/* "Covers difficult physical tasks like climbing, swimming, jumping, and other feats of strength and persuasion." */}
                    <span>Athletics (STR):</span>
                    <span 
                        className="skill-mod clickable"
                        data-testid="athletics-modifier"
                        onClick={() => {
                            const mod = characterData.skills.athletics ? 
                                modifier(characterData.stats.strength) + characterData.proficiencyBonus :
                                modifier(characterData.stats.strength);
                            rollDice(`1d20${formatModifier(mod)}`, "Athletics Check");
                        }}
                    >
                        {characterData.skills.athletics ?
                            <p>{formatModifier(modifier(characterData.stats.strength) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.strength))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    {/* "Your ability to lie, mislead, and disguise your true intentions." */}
                    <span>Deception (CHA):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.deception ? 
                                modifier(characterData.stats.charisma) + characterData.proficiencyBonus :
                                modifier(characterData.stats.charisma);
                            rollDice(`1d20${formatModifier(mod)}`, "Deception Check");
                        }}
                    >
                        {characterData.skills.deception ?
                            <p>{formatModifier(modifier(characterData.stats.charisma) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.charisma))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    {/* " Your knowledge of past events, lore, and historical figures." */}
                    <span>History (INT):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.history ? 
                                modifier(characterData.stats.intelligence) + characterData.proficiencyBonus :
                                modifier(characterData.stats.intelligence);
                            rollDice(`1d20${formatModifier(mod)}`, "History Check");
                        }}
                    >
                        {characterData.skills.history ?
                            <p>{formatModifier(modifier(characterData.stats.intelligence) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.intelligence))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Performance (CHA):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.performance ? 
                                modifier(characterData.stats.charisma) + characterData.proficiencyBonus :
                                modifier(characterData.stats.charisma);
                            rollDice(`1d20${formatModifier(mod)}`, "Performance Check");
                        }}
                    >
                        {characterData.skills.performance ?
                            <p>{formatModifier(modifier(characterData.stats.charisma) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.charisma))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Investigation (INT):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.investigation ? 
                                modifier(characterData.stats.intelligence) + characterData.proficiencyBonus :
                                modifier(characterData.stats.intelligence);
                            rollDice(`1d20${formatModifier(mod)}`, "Investigation Check");
                        }}
                    >
                        {characterData.skills.investigation ?
                            <p>{formatModifier(modifier(characterData.stats.intelligence) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.intelligence))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Persuasion (CHA):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.persuasion ? 
                                modifier(characterData.stats.charisma) + characterData.proficiencyBonus :
                                modifier(characterData.stats.charisma);
                            rollDice(`1d20${formatModifier(mod)}`, "Persuasion Check");
                        }}
                    >
                        {characterData.skills.persuasion ?
                            <p>{formatModifier(modifier(characterData.stats.charisma) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.charisma))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Medicine (WIS):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.medicine ? 
                                modifier(characterData.stats.wisdom) + characterData.proficiencyBonus :
                                modifier(characterData.stats.wisdom);
                            rollDice(`1d20${formatModifier(mod)}`, "Medicine Check");
                        }}
                    >
                        {characterData.skills.medicine ?
                            <p>{formatModifier(modifier(characterData.stats.wisdom) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.wisdom))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Insight (WIS):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.insight ? 
                                modifier(characterData.stats.wisdom) + characterData.proficiencyBonus :
                                modifier(characterData.stats.wisdom);
                            rollDice(`1d20${formatModifier(mod)}`, "Insight Check");
                        }}
                    >
                        {characterData.skills.insight ?
                            <p>{formatModifier(modifier(characterData.stats.wisdom) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.wisdom))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Intimidation (CHA):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.intimidation ? 
                                modifier(characterData.stats.charisma) + characterData.proficiencyBonus :
                                modifier(characterData.stats.charisma);
                            rollDice(`1d20${formatModifier(mod)}`, "Intimidation Check");
                        }}
                    >
                        {characterData.skills.intimidation ?
                            <p>{formatModifier(modifier(characterData.stats.charisma) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.charisma))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Nature (INT):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.nature ? 
                                modifier(characterData.stats.intelligence) + characterData.proficiencyBonus :
                                modifier(characterData.stats.intelligence);
                            rollDice(`1d20${formatModifier(mod)}`, "Nature Check");
                        }}
                    >
                        {characterData.skills.nature ?
                            <p>{formatModifier(modifier(characterData.stats.intelligence) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.intelligence))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Perception (WIS):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.perception ? 
                                modifier(characterData.stats.wisdom) + characterData.proficiencyBonus :
                                modifier(characterData.stats.wisdom);
                            rollDice(`1d20${formatModifier(mod)}`, "Perception Check");
                        }}
                    >
                        {characterData.skills.perception ?
                            <p>{formatModifier(modifier(characterData.stats.wisdom) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.wisdom))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Religion (INT):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.religion ? 
                                modifier(characterData.stats.intelligence) + characterData.proficiencyBonus :
                                modifier(characterData.stats.intelligence);
                            rollDice(`1d20${formatModifier(mod)}`, "Religion Check");
                        }}
                    >
                        {characterData.skills.religion ?
                            <p>{formatModifier(modifier(characterData.stats.intelligence) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.intelligence))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Stealth (DEX):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.stealth ? 
                                modifier(characterData.stats.dexterity) + characterData.proficiencyBonus :
                                modifier(characterData.stats.dexterity);
                            rollDice(`1d20${formatModifier(mod)}`, "Stealth Check");
                        }}
                    >
                        {characterData.skills.stealth ?
                            <p>{formatModifier(modifier(characterData.stats.dexterity) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.dexterity))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Survival (WIS):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.survival ? 
                                modifier(characterData.stats.wisdom) + characterData.proficiencyBonus :
                                modifier(characterData.stats.wisdom);
                            rollDice(`1d20${formatModifier(mod)}`, "Survival Check");
                        }}
                    >
                        {characterData.skills.survival ?
                            <p>{formatModifier(modifier(characterData.stats.wisdom) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.wisdom))}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Sleight Of Hand (DEX):</span>
                    <span 
                        className="skill-mod clickable"
                        onClick={() => {
                            const mod = characterData.skills.sleightOfHand ? 
                                modifier(characterData.stats.dexterity) + characterData.proficiencyBonus :
                                modifier(characterData.stats.dexterity);
                            rollDice(`1d20${formatModifier(mod)}`, "Sleight of Hand Check");
                        }}
                    >
                        {characterData.skills.sleightOfHand ?
                            <p>{formatModifier(modifier(characterData.stats.dexterity) + characterData.proficiencyBonus)}</p>
                            :
                            <p>{formatModifier(modifier(characterData.stats.dexterity))}</p>
                        }
                    </span>
                </div>
            </div>

            {/* Dice Roll Modal */}
            {showDiceModal && diceRollResult && (
                <div className="dice-roll-modal show">
                    <div className="dice-roll-content">
                        <h3 className="dice-roll-title">{diceRollResult.title}</h3>
                        <p className="dice-roll-formula">Formula: {diceRollResult.formula}</p>
                        <p className="dice-roll-values">Dice: [{diceRollResult.values.join(', ')}]</p>
                        {diceRollResult.modifier !== 0 && (
                            <p className="dice-roll-modifiers">{formatModifier(diceRollResult.modifier)} modifier</p>
                        )}
                        <p className="dice-roll-result">Total: {diceRollResult.total}</p>
                        <button onClick={() => setShowDiceModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </details>
    )
}