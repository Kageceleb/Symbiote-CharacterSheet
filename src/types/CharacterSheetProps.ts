export interface BaseStats {
    strength: {
        value: number,
        saving: boolean
    },
    dexterity: {
        value: number,
        saving: boolean
    },
    constitution: {
        value: number,
        saving: boolean
    },
    intelligence: {
        value: number,
        saving: boolean
    },
    wisdom: {
        value: number,
        saving: boolean
    },
    charisma: {
        value: number,
        saving: boolean
    }
}
export interface StatsProps {


    wisdom: number,
    charisma: number
}
export interface SkillProps {
    name: string,
    isProficient: boolean,
    ability: keyof BaseStats
}
export interface CharacterSheetProps {
    characterData: {
        name: string,
        class: string,
        race: string,
        lvl: number,
        portraitUrl?: string,
        stats: BaseStats,
        health: {
            maxHp: number,
            currentHp: number,
            temporaryHp: number,
        },
        defenses: {
            ac: number,
            strength: boolean,
            dexterity: boolean,
            constitution: boolean,
            intelligence: boolean,
            wisdom: boolean,
            charisma: boolean,

        },
        proficiencyBonus: number,
        initiative: number,
        speed: number,
        deathSavingThrows: number,
        skills: SkillProps[],
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