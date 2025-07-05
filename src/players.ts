import { CharacterSheetProps } from "./types/CharacterSheetProps"

export const players: Array<CharacterSheetProps["characterData"]> = [
  {
    "name": "Alnuhazux",
    "class": "Rogue",
    "race": "Dragonborn",
    "lvl": 8,
    "portraitUrl": "https://www.dndbeyond.com/avatars/47960/518/1581111423-143195888.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp",
    "stats": {
      "strength": {
        "value": 10,
        "saving": false
      },
      "dexterity": {
        "value": 20,
        "saving": true,
      },
      "constitution": {
        "value": 12,
        "saving": true
      },
      "intelligence": {
        "value": 14,
        "saving": false
      },
      "wisdom": {
        "value": 10,
        "saving": false
      },
      "charisma": {
        "value": 16,
        "saving": false
      },
    },
    "health": {
      "maxHp": 62,
      "currentHp": 62,
      "temporaryHp": 0,
    },
    "defenses": {
      "ac": 22,
      "strength": false,
      "dexterity": false,
      "constitution": true,
      "intelligence": false,
      "wisdom": false,
      "charisma": true
    },
    "proficiencyBonus": 3,
    "initiative": 9,
    "speed": 6,
    "deathSavingThrows": 0,
    "skills": [
      {
        "name": "Acrobatics",
        "isProficient": true,
        "ability": "dexterity"
      },
      {
        "name": "Animal Handling",
        "isProficient": false,
        "ability": "wisdom"
      },
      {
        "name": "Arcana",
        "isProficient": false,
        "ability": "intelligence"
      },
      {
        "name": "Athletics",
        "isProficient": false,
        "ability": "strength"
      },
      {
        "name": "Deception",
        "isProficient": false,
        "ability": "charisma"
      },
      {
        "name": "History",
        "isProficient": false,
        "ability": "intelligence"
      },
      {
        "name": "Insight",
        "isProficient": false,
        "ability": "wisdom"
      },
      {
        "name": "Intimidation",
        "isProficient": false,
        "ability": "charisma"
      },
      {
        "name": "Investigation",
        "isProficient": false,
        "ability": "intelligence"
      },
      {
        "name": "Medicine",
        "isProficient": false,
        "ability": "wisdom"
      },
      {
        "name": "Nature",
        "isProficient": false,
        "ability": "intelligence"
      },
      {
        "name": "Perception",
        "isProficient": false,
        "ability": "wisdom"
      },
      {
        "name": "Performance",
        "isProficient": false,
        "ability": "charisma"
      },
      {
        "name": "Persuasion",
        "isProficient": false,
        'ability': 'charisma'
      },
      {
        'name': 'Religion',
        'isProficient': false,
        'ability': 'intelligence'
      },
      {
        'name': 'Sleight of Hand',
        'isProficient': true,
        'ability': 'dexterity'
      },
      {
        'name': 'Stealth',
        'isProficient': true,
        'ability': 'dexterity'
      },
      {
        'name': 'Survival',
        'isProficient': false,
        'ability': 'wisdom'
      },


    ],
    "powers": {
      "atWill": [
        {
          "name": "Deft Strike",
          "description": "You slip past your foe's defenses and deal a precise strike.",
          "used": false,
          "diceRoll": "1d8+5"
        },
        {
          "name": "Sly Flourish",
          "description": "You artfully dodge around your foe, distracting it with a series of feints before landing a telling blow.",
          "used": false,
          "diceRoll": "1d6+7"
        }
      ],
      "encounter": [
        {
          "name": "Dazing Strike",
          "description": "You slam your weapon into your foe with a jarring blow that leaves it seeing double.",
          "used": false,
          "diceRoll": "2d6+5"
        },
        {
          "name": "Jumping Attack",
          "description": "You leap over obstacles and slice at your foe as you descend.",
          "used": false,
          "diceRoll": "2d8+5"
        },
        {
          "name": "Leaping Dodge",
          "description": "You avoid your enemy's attack with a quick leap that carries you out of the path of danger.",
          "used": false
        }
      ],
      "daily": [
        {
          "name": "Blinding Barrage",
          "description": "You spray dust or sand into your enemies' eyes as you tumble among them, striking at them while they're blinded.",
          "used": false,
          "diceRoll": "3d6+5"
        },
        {
          "name": "Easy Target",
          "description": "You puzzle your foe with an elaborate series of maneuvers, then strike with deadly precision.",
          "used": false,
          "diceRoll": "3d8+5"
        }
      ],
      "utility": [
        {
          "name": "Fortitude of the Sword",
          "description": "You tough out a devastating attack, focusing on your next strike.",
          "used": false
        },
        {
          "name": "Slick Feint",
          "description": "You distract your foe with a cunning feint to make your next attack more effective.",
          "used": false
        }
      ]
    },
    "equipment": {
      "weapons": [
        {
          "name": "Dagger +2",
          "attackModifier": 11,
          "damageFormula": "1d4",
          "damageModifier": 7,
          "properties": ["Light", "Thrown", "Versatile"],
          "description": "A small blade designed for stabbing or throwing."
        },
        {
          "name": "Short Sword +1",
          "attackModifier": 10,
          "damageFormula": "1d6",
          "damageModifier": 6,
          "properties": ["Finesse", "Light"],
          "description": "A one-handed sword shorter than a longsword."
        }
      ],
      "armor": "Leather Armor +2",
      "gear": ["Thieves' Tools", "Backpack", "Bedroll", "Flint and Steel"],
      "magicItems": ["Gloves of Dexterity +2", "Cloak of Resistance +1"]
    },
    "feats": ["Backstabber", "Weapon Focus (Light Blades)", "Improved Initiative"],
    "wealth": {
      "gold": 650,
      "silver": 30,
      "copper": 15
    },
    "languages": ["Common", "Infernal"],
    "resistances": ["Fire 5"],
    "notes": "Tiefling racial: +2 Deception, +2 Stealth, +5 fire resistance, Infernal Wrath 1/encounter",
    "conditions": [
      {
        "name": "Marked",
        "duration": "Until end of next turn",
        "description": "-2 to attacks that don't include the marker as a target"
      }
    ]
  },
]
