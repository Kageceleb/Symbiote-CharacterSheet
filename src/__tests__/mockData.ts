// This file contains mock data for tests and is not a test file itself.
import { CharacterSheetProps, Condition, PowerData } from '../types/CharacterSheetProps';

export const mockPowerData: PowerData = {
  name: 'Test Power',
  description: 'This is a test power',
  used: false,
  diceRoll: '1d6+2'
};

export const mockCondition: Condition = {
  name: 'Test Condition',
  duration: 'End of encounter',
  description: 'This is a test condition'
};

export const mockCharacterData: CharacterSheetProps['characterData'] = {
  name: 'Test Character',
  class: 'Fighter',
  race: 'Human',
  lvl: 5,
  portraitUrl: 'https://example.com/image.jpg',
  stats: {
    strength: { value: 16, saving: false },
    dexterity: { value: 14, saving: false },
    constitution: { value: 15, saving: true },
    intelligence: { value: 12, saving: false },
    wisdom: { value: 10, saving: false },
    charisma: { value: 8, saving: true }
  },
  health: {
    maxHp: 45,
    currentHp: 30,
    temporaryHp: 5,
  },
  defenses: {
    ac: 18,
    "strength": false,
    "dexterity": false,
    "constitution": true,
    "intelligence": false,
    "wisdom": false,
    "charisma": true
  },
  proficiencyBonus: 2,
  initiative: 4,
  speed: 6,
  deathSavingThrows: 1,
  skills: [
    { name: "Acrobatics", ability: "dexterity", isProficient: false },
    { name: "Animal Handling", ability: "wisdom", isProficient: false },
    { name: "Arcana", ability: "intelligence", isProficient: true },
    { name: "Athletics", ability: "strength", isProficient: false },
    { name: "Deception", ability: "charisma", isProficient: false },
    { name: "Investigation", ability: "intelligence", isProficient: false },
    { name: "Persuasion", ability: "charisma", isProficient: false },
    { name: "Medicine", ability: "wisdom", isProficient: false },
    { name: "History", ability: "intelligence", isProficient: false },
    { name: "Insight", ability: "wisdom", isProficient: false },
    { name: "Intimidation", ability: "charisma", isProficient: false },
    { name: "Nature", ability: "intelligence", isProficient: false },
    { name: "Perception", ability: "wisdom", isProficient: false },
    { name: "Performance", ability: "charisma", isProficient: false },
    { name: "Religion", ability: "intelligence", isProficient: false },
    { name: "Stealth", ability: "dexterity", isProficient: false },
    { name: "Survival", ability: "wisdom", isProficient: false },
    { name: "Sleight Of Hand", ability: "dexterity", isProficient: false }
  ],
  powers: {
    atWill: [
      {
        name: 'Sure Strike',
        description: 'Attack with advantage',
        used: false,
        diceRoll: '1d20+8'
      }
    ],
    encounter: [
      {
        name: 'Sweeping Blow',
        description: 'Attack all adjacent enemies',
        used: false,
        diceRoll: '1d20+8'
      }
    ],
    daily: [
      {
        name: 'Brute Strike',
        description: 'Powerful attack that deals extra damage',
        used: false,
        diceRoll: '1d20+8'
      }
    ],
    utility: [
      {
        name: 'Second Wind',
        description: 'Recover hit points',
        used: false
      }
    ]
  },
  equipment: {
    weapons: [
      {
        name: 'Longsword',
        attackModifier: 5,
        damageFormula: '1d8',
        damageModifier: 3,
        properties: ['Versatile'],
        description: 'A one-handed sword with a long blade.'
      },
      {
        name: 'Dagger',
        attackModifier: 4,
        damageFormula: '1d4',
        damageModifier: 2,
        properties: ['Light', 'Thrown', 'Versatile'],
        description: 'A small blade designed for stabbing or throwing.'
      }
    ],
    armor: 'Chain Mail',
    gear: ['Backpack', 'Bedroll', 'Rations (5 days)'],
    magicItems: ['Amulet of Health +1']
  },
  feats: ['Weapon Focus (Heavy Blades)', 'Toughness'],
  wealth: {
    gold: 50,
    silver: 30,
    copper: 15
  },
  languages: ['Common', 'Dwarvish'],
  resistances: ['5 fire'],
  notes: 'Test character notes',
  conditions: [
    {
      name: 'Dazed',
      duration: 'End of next turn',
      description: 'Can take only one action on your turn'
    }
  ]
};