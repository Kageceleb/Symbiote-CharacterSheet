// Mock TS object for testing
export const mockTS = {
  dice: {
    putDiceInTray: jest.fn().mockImplementation((dice, hideResults) => {
      // This mock implementation will be used to verify correct parameters
      return undefined;
    })
  },
  name: 'Alnuhazux',
  lvl: 8,
  race: 'Tiefling',
  class: 'Rogue',
  portraitUrl: '/path/to/portrait.jpg',
  health: {
    currentHp: 64,
    maxHp: 64,
    temporaryHp: 0,
    surges: {
      value: 8,
      max: 8
    },
    secondWind: false
  },
  stats: {
    strength: 16,
    dexterity: 20,
    constitution: 14,
    intelligence: 12,
    wisdom: 10,
    charisma: 18
  },
  skills: {
    acrobatics: true,
    animalHandling: false,
    arcana: false,
    athletics: true,
    deception: true,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: true,
    performance: false,
    persuasion: false,
    religion: false,
    stealth: true,
    survival: false,
    sleightOfHand: true
  },
  powers: {
    atWill: [
      {
        name: 'Deft Strike',
        used: false,
        diceRoll: '1d20+8'
      },
      {
        name: 'Sly Flourish',
        used: false,
        diceRoll: '1d20+8'
      }
    ],
    encounter: [
      {
        name: 'Trick Strike',
        used: false,
        diceRoll: '1d20+8'
      },
      {
        name: 'Sweeping Blow',
        used: false,
        diceRoll: '1d20+8'
      }
    ],
    daily: [
      {
        name: 'Brute Strike',
        used: false,
        diceRoll: '1d20+8'
      }
    ],
    utility: [
      {
        name: 'Second Wind',
        used: false
      }
    ]
  },
  defenses: {
    ac: 22,
    fortitude: 18,
    reflex: 20,
    will: 16
  },
  proficiencyBonus: 3,
  initiative: 5,
  speed: 6,
  actionPoints: 1,
  savingThrows: {
    base: 0,
    deathSavingThrows: 0,
    modifiers: ""
  },
  equipment: {
    weapons: [
      {
        name: 'Longsword',
        attackModifier: 8,
        damageFormula: '1d8',
        damageModifier: 3,
        properties: ['Versatile']
      },
      {
        name: 'Dagger',
        attackModifier: 8,
        damageFormula: '1d4',
        damageModifier: 3,
        properties: ['Off-hand', 'Light', 'Thrown']
      }
    ],
    armor: 'Chain Mail',
    gear: ['Backpack', 'Bedroll', 'Rope (50 ft)', 'Torch (5)'],
    magicItems: ['Amulet of Health +1', 'Ring of Protection +1']
  },
  wealth: {
    gold: 50,
    silver: 30,
    copper: 15
  },
  feats: ['Weapon Focus', 'Toughness', 'Improved Initiative'],
  languages: ['Common', 'Dwarvish'],
  resistances: ['5 fire'],
  notes: 'Test character notes',
  conditions: [
    {
      name: 'Dazed',
      duration: 'End of next turn',
      description: 'Cannot take immediate actions'
    }
  ]
};

// Mock the global TS object
(global as any).TS = mockTS; 