export interface CharacterSheetProps {
    characterData: {
        name: string,
        class: string,
        race: string,
        lvl: number,
        portraitUrl?: string,
        stats: {
            strength: number,
            dexterity: number,
            constitution: number,
            intelligence: number,
            wisdom: number,
            charisma: number
        },
        health: {
            maxHp: number,
            currentHp: number,
            temporaryHp: number,
        },
        defenses: {
            ac: number,
            fortitude: number,
            reflex: number,
            will: number
        },
        proficiencyBonus: number,
        initiative: number,
        speed: number,
        actionPoints: number,
        savingThrows: {
            base: number,
            deathSavingThrows: number,
            modifiers: string
        },
        skills: {
            acrobatics: boolean,
            animalHandling: boolean,
            arcana: boolean,
            athletics: boolean,
            deception: boolean,
            history: boolean,
            insight: boolean,
            intimidation: boolean,
            investigation: boolean,
            medicine: boolean,
            nature: boolean,
            perception: boolean,
            performance: boolean,
            persuasion: boolean,
            religion: boolean,
            stealth: boolean,
            survival: boolean,
            sleightOfHand: boolean
        },
        powers: {
            atWill: PowerData[],
            encounter: PowerData[],
            daily: PowerData[],
            utility: PowerData[]
        },
        equipment: {
            weapons: Weapon[],
            armor: string,
            gear: string[],
            magicItems: string[]
        },
        feats: string[],
        wealth: {
            gold: number,
            silver: number,
            copper: number
        },
        languages: string[],
        resistances: string[],
        notes: string,
        conditions: Condition[]
    }
}

export interface PowerData {
    name: string;
    description?: string;
    used: boolean;
    diceRoll?: string;
}

export interface Condition {
    name: string;
    duration: string;
    description?: string;
}

export interface Weapon {
    name: string;
    attackModifier: number;
    damageFormula: string;
    damageModifier: number;
    properties?: string[];
    description?: string;
}