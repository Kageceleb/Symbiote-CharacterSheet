import React from 'react';
import './App.css';
import { CharacterSheet } from './components/CharacterSheet';
import characters from "../players.json"

const charactersData = characters;
const App: React.FC = () => {

  // const handleClick: any (() => { })
  return (
    <>
      <div className='topContainer'>
        <div className='session-content'>
          <h1>Notes from the session</h1>
          {/* <button onClick={handleClick}></button> */}
        </div>
        <div></div>
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
