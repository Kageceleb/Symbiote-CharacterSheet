import React, { useState } from "react"
import { CharacterSheetProps, PowerData, Condition } from "../types/CharacterSheetProps"

const modifier: (abilityScore: number) => number = (abilityScore: number) => {
    return Math.floor((abilityScore - 10) / 2);
}



export const Skills: React.FC<CharacterSheetProps> = ({ characterData }) => {
    return (
        <details>
            <summary className="section-header">Skills</summary>
            <div className="skills-grid">
                <div className="skill">
                    {/* "Your ability to perform acrobatic stunts, maintain balance, and move with agility." */}
                    <span>Acrobatics (DEX):</span>
                    <span>
                        {characterData.skills.acrobatics ?
                            <p>{(modifier(characterData.stats.dexterity)) + characterData.proficiencyBonus}</p>
                            :
                            <p>{(modifier(characterData.stats.dexterity))}</p>
                        }
                    </span>


                </div>
                <div className="skill">
                    {/* "Your ability to calm, train, and interact with animals." */}
                    <span>Animal Handling (WIS):</span>
                    <span>
                        {characterData.skills.arcana ?
                            <p>{(modifier(characterData.stats.wisdom)) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.wisdom)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    {/* "Your knowledge of magic, magical items, and the planes of existence." */}
                    <span>Arcana (INT):</span>
                    <span>
                        {characterData.skills.arcana ?
                            <p>{(modifier(characterData.stats.intelligence)) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.intelligence)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    {/* "Covers difficult physical tasks like climbing, swimming, jumping, and other feats of strength and persuasion." */}
                    <span>Athletics (STR):</span>
                    <span>
                        {characterData.skills.athletics ?
                            <p>{(modifier(characterData.stats.strength)) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.strength)}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    {/* "Your ability to lie, mislead, and disguise your true intentions." */}
                    <span>Deception (CHA):</span>
                    <span>
                        {characterData.skills.deception ?
                            <p>{modifier(characterData.stats.charisma) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.charisma)}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    {/* " Your knowledge of past events, lore, and historical figures." */}
                    <span>History (INT):</span>
                    <span>
                        {characterData.skills.history ?
                            <p>{modifier(characterData.stats.intelligence) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.intelligence)}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Performance (CHA):</span>
                    <span>
                        {characterData.skills.performance ?
                            <p>{modifier(characterData.stats.charisma) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.charisma)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Investigation (INT):</span>
                    <span>
                        {characterData.skills.investigation ?
                            <p>{modifier(characterData.stats.intelligence) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.intelligence)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Persuasion (CHA):</span>
                    <span>
                        {characterData.skills.persuasion ?
                            <p>{modifier(characterData.stats.charisma) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.charisma)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Medicine (WIS):</span>
                    <span>
                        {characterData.skills.medicine ?
                            <p>{(modifier(characterData.stats.wisdom)) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.wisdom)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Insight (WIS):</span>
                    <span>
                        {characterData.skills.insight ?
                            <p>{(modifier(characterData.stats.wisdom)) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.wisdom)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Intimidation (CHA):</span>
                    <span>
                        {characterData.skills.intimidation ?
                            <p>{modifier(characterData.stats.charisma) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.charisma)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Nature (INT):</span>
                    <span>
                        {characterData.skills.nature ?
                            <p>{modifier(characterData.stats.intelligence) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.intelligence)}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Perception (WIS):</span>
                    <span>
                        {characterData.skills.perception ?
                            <p>{modifier(characterData.stats.wisdom) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.wisdom)}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Religion (INT):</span>
                    <span>
                        {characterData.skills.religion ?
                            <p>{modifier(characterData.stats.intelligence) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.intelligence)}</p>
                        }
                    </span>
                </div>
                <div className="skill">
                    <span>Stealth (DEX):</span>
                    <span>
                        {characterData.skills.stealth ?
                            <p>{modifier(characterData.stats.dexterity) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.dexterity)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Survival (WIS):</span>
                    <span>
                        {characterData.skills.survival ?
                            <p>{modifier(characterData.stats.wisdom) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.wisdom)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Sleight Of Hand (DEX):</span>
                    <span>
                        {characterData.skills.sleightOfHand ?
                            <p>{modifier(characterData.stats.dexterity) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.dexterity)}</p>
                        }
                    </span>

                </div>
            </div>
        </details>
    )
}