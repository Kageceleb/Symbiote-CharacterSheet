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
  xp: 5000,
  paragonPath: 'Test Path',
  portraitUrl: 'https://example.com/image.jpg',
  stats: {
    strength: 16,
    dexterity: 14,
    constitution: 15,
    intelligence: 12,
    wisdom: 10,
    charisma: 8
  },
  health: {
    maxHp: 45,
    currentHp: 30,
    temporaryHp: 5,
    surges: {
      value: 10,
      max: 12
    },
    secondWind: false
  },
  defenses: {
    ac: 18,
    fortitude: 16,
    reflex: 14,
    will: 12
  },
  proficiencyBonus: 2,
  initiative: 4,
  speed: 6,
  actionPoints: 1,
  savingThrows: {
    base: 0,
    deathSavingThrows: 1,
    modifiers: '+2 vs. Fear'
  },
  skills: {
    acrobatics: false,
    animalHandling: false,
    arcana: true,
    athletics: false,
    deception: false,
    investigation: false,
    persuasion: false,
    medicine: false,
    history: false,
    insight: false,
    intimidation: false,
    nature: false,
    perception: false,
    performance: false,
    religion: false,
    stealth: false,
    survival: false,
    sleightOfHand: false
  },
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
    weapons: ['Longsword', 'Dagger'],
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