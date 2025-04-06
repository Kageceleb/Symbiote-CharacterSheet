import React, { useState } from "react"
import { CharacterSheetProps, PowerData, Condition } from "../../types/CharacterSheetProps"

const modifier: (number: number) => number = (abilityScore: number) => {
    if (abilityScore < 10) {
        return Math.round((abilityScore - 10) / 2);
    } return Math.floor((abilityScore - 10) / 2);
}



export const Skills: React.FC<CharacterSheetProps> = ({ characterData }) => {
    return (
        <details>
            <summary className="section-header">Skills</summary>
            <div className="skills-grid">
                <div className="skill">
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
                    <span>Bluff (CHA):</span>
                    <span>
                        {characterData.skills.bluff ?
                            <p>{modifier(characterData.stats.charisma) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.charisma)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Diplomacy (CHA):</span>
                    <span>
                        {characterData.skills.diplomacy ?
                            <p>{modifier(characterData.stats.charisma) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.charisma)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Dungeoneering (WIS):</span>
                    <span>
                        {characterData.skills.dungeoneering ?
                            <p>{modifier(characterData.stats.wisdom) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.wisdom)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Endurance (CON):</span>
                    <span>
                        {characterData.skills.endurance ?
                            <p>{modifier(characterData.stats.constitution) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.constitution)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Heal (WIS):</span>
                    <span>
                        {characterData.skills.heal ?
                            <p>{(modifier(characterData.stats.wisdom)) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.wisdom)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
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
                    <span>Intimidate (CHA):</span>
                    <span>
                        {characterData.skills.intimidate ?
                            <p>{modifier(characterData.stats.charisma) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.charisma)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Nature (WIS):</span>
                    <span>
                        {characterData.skills.nature ?
                            <p>{modifier(characterData.stats.wisdom) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.wisdom)}</p>
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
                    <span>Streetwise (CHA):</span>
                    <span>
                        {characterData.skills.streetwise ?
                            <p>{modifier(characterData.stats.charisma) + characterData.proficiencyBonus}</p>
                            :
                            <p>{modifier(characterData.stats.charisma)}</p>
                        }
                    </span>

                </div>
                <div className="skill">
                    <span>Thievery (DEX):</span>
                    <span>
                        {characterData.skills.thievery ?
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