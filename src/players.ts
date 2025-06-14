import { CharacterSheetProps } from "./types/CharacterSheetProps"

export const players: Array<CharacterSheetProps["characterData"]> = [
  {
    "name": "Alnuhazux",
    "class": "Rogue",
    "race": "Tiefling",
    "lvl": 8,
    "portraitUrl": "https://i.imgur.com/HGkpyQQ.jpg",
    "stats": {
      "strength": 10,
      "dexterity": 20,
      "constitution": 12,
      "intelligence": 14,
      "wisdom": 10,
      "charisma": 16
    },
    "health": {
      "maxHp": 62,
      "currentHp": 62,
      "temporaryHp": 0,
    },
    "defenses": {
      "ac": 22,
      "fortitude": 18,
      "reflex": 24,
      "will": 20
    },
    "proficiencyBonus": 4,
    "initiative": 9,
    "speed": 6,
    "savingThrows": {
      "base": 0,
      "deathSavingThrows": 0,
      "modifiers": ""
    },
    "skills": {
      "acrobatics": true,
      "animalHandling": false,
      "arcana": false,
      "athletics": false,
      "deception": false,
      "performance": false,
      "investigation": false,
      "persuasion": false,
      "medicine": false,
      "history": false,
      "insight": false,
      "intimidation": false,
      "nature": false,
      "perception": false,
      "religion": false,
      "stealth": false,
      "survival": false,
      "sleightOfHand": false
    },
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
  {
    "name": "Krusk",
    "class": "Cleric/Barbarian",
    "race": "Half-Orc",
    "lvl": 8,
    "portraitUrl": "https://www.dndbeyond.com/avatars/14029/652/1581111423-38739076.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp",
    "stats": {
      "strength": 18,
      "dexterity": 12,
      "constitution": 16,
      "intelligence": 10,
      "wisdom": 16,
      "charisma": 10
    },
    "health": {
      "maxHp": 80,
      "currentHp": 80,
      "temporaryHp": 0,
    },
    "defenses": {
      "ac": 22,
      "fortitude": 21,
      "reflex": 17,
      "will": 20
    },
    "proficiencyBonus": 4,
    "initiative": 5,
    "speed": 6,
    "savingThrows": {
      "base": 0,
      "deathSavingThrows": 0,
      "modifiers": ""
    },
    "skills": {
      "acrobatics": true,
      "animalHandling": false,
      "arcana": false,
      "athletics": false,
      "deception": false,
      "performance": false,
      "investigation": false,
      "persuasion": false,
      "medicine": false,
      "history": false,
      "insight": false,
      "intimidation": false,
      "nature": false,
      "perception": false,
      "religion": false,
      "stealth": false,
      "survival": false,
      "sleightOfHand": false
    },
    "powers": {
      "atWill": [
        {
          "name": "Lance of Faith",
          "description": "A beam of white light streams toward your enemy, bowling over that creature and burning it with radiant power.",
          "used": false,
          "diceRoll": "1d8+3"
        },
        {
          "name": "Priest's Shield",
          "description": "A shield of divine energy protects you from harm and helps your ally against the same enemy.",
          "used": false
        },
        {
          "name": "Howling Strike",
          "description": "You let loose a fierce howl and strike with a powerful blow.",
          "used": false,
          "diceRoll": "1d12+4"
        }
      ],
      "encounter": [
        {
          "name": "Divine Glow",
          "description": "A burning column of radiance bursts from above, searing your foes and empowering your allies.",
          "used": false,
          "diceRoll": "2d8+3"
        },
        {
          "name": "Healing Strike",
          "description": "You attack your foe and invoke divine power to medicine you or an ally near you.",
          "used": false,
          "diceRoll": "2d8+4"
        },
        {
          "name": "Swift Charge",
          "description": "You barrel toward an enemy, heedless of danger. Your speed and ferocity catch your enemy off guard.",
          "used": false,
          "diceRoll": "2d12+4"
        }
      ],
      "daily": [
        {
          "name": "Flame Strike",
          "description": "A column of divine fire burns down from above, dealing fire and radiant damage.",
          "used": false,
          "diceRoll": "3d10+3"
        },
        {
          "name": "Rage Strike",
          "description": "You strike with the full fury of your rage.",
          "used": false,
          "diceRoll": "3d12+4"
        }
      ],
      "utility": [
        {
          "name": "Blessing of Fervor",
          "description": "You channel divine power into your allies to aid their actions.",
          "used": false
        },
        {
          "name": "Savage Advance",
          "description": "Your unbridled rage drives you forward through the battlefield.",
          "used": false
        }
      ]
    },
    "equipment": {
      "weapons": [
        {
          "name": "Warhammer +2",
          "attackModifier": 10,
          "damageFormula": "1d8",
          "damageModifier": 6,
          "properties": ["Versatile"],
          "description": "A one-handed hammer designed for combat."
        },
        {
          "name": "Heavy Shield",
          "attackModifier": 8,
          "damageFormula": "1d4",
          "damageModifier": 4,
          "properties": ["Shield"],
          "description": "A large shield that provides protection and can be used as an improvised weapon."
        }
      ],
      "armor": "Chainmail +2",
      "gear": ["Holy Symbol", "Backpack", "Healer's Kit", "Waterskin"],
      "magicItems": ["Gauntlets of Ogre Power +2", "Amulet of Protection +1"]
    },
    "feats": ["Weapon Focus (Hammer)", "Toughness", "Healing Hands"],
    "wealth": {
      "gold": 450,
      "silver": 20,
      "copper": 0
    },
    "languages": ["Common", "Orc"],
    "resistances": [],
    "notes": "Half-Orc racial: +2 Intimidation, +2 Persuasion, Furious Assault 1/encounter",
    "conditions": []
  },
  {
    "name": "Oliver",
    "class": "Sorcerer",
    "race": "Human",
    "lvl": 8,
    "portraitUrl": "https://www.dndbeyond.com/avatars/44141/67/1581111423-38647612.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp",
    "stats": {
      "strength": 10,
      "dexterity": 14,
      "constitution": 16,
      "intelligence": 12,
      "wisdom": 10,
      "charisma": 20
    },
    "health": {
      "maxHp": 68,
      "currentHp": 68,
      "temporaryHp": 0,
    },
    "defenses": {
      "ac": 20,
      "fortitude": 18,
      "reflex": 19,
      "will": 20
    },
    "proficiencyBonus": 4,
    "initiative": 6,
    "speed": 6,
    "savingThrows": {
      "base": 0,
      "deathSavingThrows": 0,
      "modifiers": ""
    },
    "skills": {
      "acrobatics": true,
      "animalHandling": false,
      "arcana": false,
      "athletics": true,
      "deception": false,
      "performance": false,
      "investigation": false,
      "persuasion": false,
      "medicine": false,
      "history": false,
      "insight": false,
      "intimidation": false,
      "nature": false,
      "perception": false,
      "religion": false,
      "stealth": false,
      "survival": false,
      "sleightOfHand": false
    },
    "powers": {
      "atWill": [
        {
          "name": "Chaos Bolt",
          "description": "You unleash a blast of many-colored energy that ricochets from enemy to enemy.",
          "used": false,
          "diceRoll": "1d10+5"
        },
        {
          "name": "Storm Walk",
          "description": "Your form crackles with lightning, and you fly forward to blast your foes with electricity.",
          "used": false,
          "diceRoll": "1d8+5"
        }
      ],
      "encounter": [
        {
          "name": "Lightning Daggers",
          "description": "You hurl small bolts of lightning that explode like grenades, shattering into smaller lightning bolts that strike adjacent enemies.",
          "used": false,
          "diceRoll": "2d8+5"
        },
        {
          "name": "Bedeviling Burst",
          "description": "You change your enemy's perceptions, and what was once an ally now seems a deadly foe.",
          "used": false,
          "diceRoll": "2d10+5"
        },
        {
          "name": "Thundering Roar",
          "description": "You emit a sonic cry that batters your foes, knocking them away from you.",
          "used": false,
          "diceRoll": "2d8+5"
        }
      ],
      "daily": [
        {
          "name": "Dazzling Ray",
          "description": "You loose a barrage of meteoric energy that overwhelms your enemy.",
          "used": false,
          "diceRoll": "6d6+5"
        },
        {
          "name": "Lightning Breath",
          "description": "Crackling arcs of lightning leap from your mouth, burning enemies in front of you and blasting through to enemies behind them.",
          "used": false,
          "diceRoll": "4d8+5"
        }
      ],
      "utility": [
        {
          "name": "Elemental Shift",
          "description": "You briefly take on the form of an elemental creature, slipping between spaces with incredible speed.",
          "used": false
        },
        {
          "name": "Swift Escape",
          "description": "As danger threatens, you teleport away in a flash of light.",
          "used": false
        }
      ]
    },
    "equipment": {
      "weapons": [
        {
          "name": "Quarterstaff +2",
          "attackModifier": 9,
          "damageFormula": "1d6",
          "damageModifier": 5,
          "properties": ["Versatile"],
          "description": "A simple wooden staff used as a weapon and spellcasting focus."
        },
        {
          "name": "Dagger",
          "attackModifier": 7,
          "damageFormula": "1d4",
          "damageModifier": 3,
          "properties": ["Light", "Thrown", "Versatile"],
          "description": "A small blade designed for stabbing or throwing."
        }
      ],
      "armor": "Cloth Armor +2",
      "gear": ["Arcane Implement", "Backpack", "Spellbook", "Alchemist's Fire"],
      "magicItems": ["Circlet of Mental Prowess +2", "Bracers of Mighty Striking +1"]
    },
    "feats": ["Arcane Initiate", "Implement Focus (Staff)", "Ritual Caster"],
    "wealth": {
      "gold": 580,
      "silver": 50,
      "copper": 25
    },
    "languages": ["Common", "Elven", "Draconic"],
    "resistances": [],
    "notes": "Human racial: +1 to all defenses, bonus at-will power, bonus feat, bonus skill",
    "conditions": [
      {
        "name": "Dazed",
        "duration": "End of next turn",
        "description": "Grant combat advantage, can take only one action (standard, move, or minor) during your turn, can't flank"
      }
    ]
  },
  {
    "name": "Raza",
    "class": "Warlock/Sorcerer",
    "race": "Drow",
    "lvl": 8,
    "portraitUrl": "https://www.dndbeyond.com/avatars/15092/799/1581111423-42882950.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp",
    "stats": {
      "strength": 8,
      "dexterity": 16,
      "constitution": 14,
      "intelligence": 16,
      "wisdom": 10,
      "charisma": 18
    },
    "health": {
      "maxHp": 64,
      "currentHp": 64,
      "temporaryHp": 0,
    },
    "defenses": {
      "ac": 21,
      "fortitude": 17,
      "reflex": 20,
      "will": 21
    },
    "proficiencyBonus": 4,
    "initiative": 7,
    "speed": 6,
    "savingThrows": {
      "base": 0,
      "deathSavingThrows": 0,
      "modifiers": ""
    },
    "skills": {
      "acrobatics": true,
      "animalHandling": false,
      "arcana": false,
      "athletics": true,
      "deception": false,
      "performance": false,
      "investigation": false,
      "persuasion": false,
      "medicine": false,
      "history": false,
      "insight": false,
      "intimidation": false,
      "nature": false,
      "perception": false,
      "religion": false,
      "stealth": false,
      "survival": false,
      "sleightOfHand": false
    },
    "powers": {
      "atWill": [
        {
          "name": "Eldritch Blast",
          "description": "You fire a bolt of dark energy at your enemy.",
          "used": false,
          "diceRoll": "1d10+4"
        },
        {
          "name": "Dire Radiance",
          "description": "You pierce your enemy with a ray of dark energy.",
          "used": false,
          "diceRoll": "1d6+4"
        },
        {
          "name": "Chaos Bolt",
          "description": "You unleash a blast of many-colored energy that ricochets from enemy to enemy.",
          "used": false,
          "diceRoll": "1d10+4"
        }
      ],
      "encounter": [
        {
          "name": "Witchfire",
          "description": "Flames dance upon your enemy as you engulf it with fire.",
          "used": false,
          "diceRoll": "2d8+4"
        },
        {
          "name": "Vampiric Embrace",
          "description": "Dark energy streams from your enemy, giving you vitality.",
          "used": false,
          "diceRoll": "2d10+4"
        },
        {
          "name": "Thunder Slam",
          "description": "You crash a thunderclap of sonic energy into your foe.",
          "used": false,
          "diceRoll": "3d8+4"
        }
      ],
      "daily": [
        {
          "name": "Curse of the Dark Dream",
          "description": "Your enemy's mind is caught in a dark and terrible dreamscape that it can't escape.",
          "used": false,
          "diceRoll": "3d8+4"
        },
        {
          "name": "Flames of the Pit",
          "description": "Hellfire erupts on your enemy, and you gain power over your foe.",
          "used": false,
          "diceRoll": "4d10+4"
        }
      ],
      "utility": [
        {
          "name": "Shadow Veil",
          "description": "Shadows wrap around you, hiding you from your enemies.",
          "used": false
        },
        {
          "name": "Ethereal Stride",
          "description": "You become insubstantial and step through your enemies as if they were no more solid than smoke.",
          "used": false
        }
      ]
    },
    "equipment": {
      "weapons": [
        {
          "name": "Rod +2",
          "attackModifier": 9,
          "damageFormula": "1d4",
          "damageModifier": 5,
          "properties": ["Arcane Focus"],
          "description": "A magical rod used as a spellcasting focus and weapon."
        },
        {
          "name": "Dagger",
          "attackModifier": 7,
          "damageFormula": "1d4",
          "damageModifier": 3,
          "properties": ["Light", "Thrown", "Versatile"],
          "description": "A small blade designed for stabbing or throwing."
        }
      ],
      "armor": "Leather Armor +2",
      "gear": ["Arcane Implement", "Backpack", "Ritual Components", "Poisons"],
      "magicItems": ["Gloves of Eldritch Admixture +2", "Cloak of Distortion +1"]
    },
    "feats": [
      "Improved Dark One's Blessing",
      "Implement Expertise (Rod)",
      "Dual Implement Spellcaster"
    ],
    "wealth": {
      "gold": 520,
      "silver": 40,
      "copper": 10
    },
    "languages": ["Common", "Elven", "Abyssal"],
    "resistances": [],
    "notes": "Drow racial: +2 Stealth, +2 Intimidation, Darkfire 1/encounter, Cloud of Darkness 1/encounter",
    "conditions": [
      {
        "name": "Slowed",
        "duration": "Save ends",
        "description": "Your speed becomes 2, and you take a -2 penalty to AC, Reflex, and attack rolls"
      },
      {
        "name": "Weakened",
        "duration": "Until end of encounter",
        "description": "Your attacks deal half damage"
      }
    ]
  }
]
