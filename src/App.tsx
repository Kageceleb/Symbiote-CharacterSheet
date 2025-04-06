import React from 'react';
import './App.css';
import { CharacterSheet } from './components/CharacterSheet';
import { players } from "./players"

const charactersData = players;
const App: React.FC = () => {

  const handleClick = () => {
    TS.dice.putDiceInTray([{ name: "samuel", roll: "1d20" }], true)
  }
  return (
    <>
      <div className='topContainer'>
        <div className='session-content'>
          <h1>Notes from the session</h1>
          {/* <button onClick={handleClick}></button> */}
        </div>
        <div>
          <button
            onClick={handleClick}

          >Rolla </button>
        </div>
        <div className='characters'>
          {charactersData.map((character) => (
            <CharacterSheet characterData={character} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
