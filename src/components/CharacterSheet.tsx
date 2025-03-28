import React from "react"
import { CharacterSheetProps } from "../../types/CharacterSheetProps"


export const CharacterSheet: React.FC<CharacterSheetProps> = ({ characterData }) => {
  return (
    <>

      <h1>{characterData.name}</h1>
    <details>
      <summary>Character Main Stats</summary>
      <p>Level: {characterData.lvl} </p>
      <p>Class: {characterData.class} </p>
      <p>str: {characterData.stats.strength} </p>
      <p>dex: {characterData.stats.dexterity} </p>
      <p>con: {characterData.stats.constitution}</p>
      <p>int: {characterData.stats.intelligence}</p>
      <p>wis: {characterData.stats.wisdom}</p>
      <p>cha: {characterData.stats.charisma}</p>
      </details>
    </>
  )
  console.log(characterData)
}