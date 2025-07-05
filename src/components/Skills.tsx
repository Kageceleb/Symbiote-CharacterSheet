import React, { useState } from "react"
import { CharacterSheetProps, SkillProps } from "../types/CharacterSheetProps"

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
        TS.dice.putDiceInTray([{ name: title, roll: formula }], false);
    }


    // Helper function to format modifiers
    const formatModifier = (mod: number) => (mod >= 0 ? `+${mod}` : `-${mod}`);



    return (
        <details>
            <summary className="section-header">Skills</summary>
            <div className="skills-grid">
                <div className="skill-column">
                    {characterData.skills.map((skill: SkillProps) => {
                        const abilityScore = characterData.stats[skill.ability]
                        const mod = skill.isProficient ?
                            modifier(abilityScore) + characterData.proficiencyBonus :
                            modifier(abilityScore);

                        return (

                            <div key={skill.name} className="skill-item">
                                <span >{skill.name} ({skill.ability})</span>
                                <span

                                    className="skill-mod clickable"
                                    data-testid="acrobatics-modifier"
                                    onClick={() => rollDice(`1d20${formatModifier(mod)}`, `${skill.name} Check`)}
                                >
                                    {
                                        <p>{formatModifier(mod)}</p>
                                    }
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Dice Roll Modal */}
            {
                showDiceModal && diceRollResult && (
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
                )
            }
        </details >
    )
}