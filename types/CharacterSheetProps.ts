export interface CharacterSheetProps {
    characterData: {
        name: string,
        class: string,
        race: string,
        lvl: number,
        xp: number,
        paragonPath?: string,
        epicDestiny?: string,
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
            surges: {
                value: number,
                max: number
            },
            secondWind: boolean
        },
        defenses: {
            ac: number,
            fortitude: number,
            reflex: number,
            will: number
        },
        initiative: number,
        speed: number,
        actionPoints: number,
        savingThrows: {
            base: number,
            deathSavingThrows: number,
            modifiers: string
        },
        skills: {
            acrobatics: number,
            arcana: number,
            athletics: number,
            bluff: number,
            diplomacy: number,
            dungeoneering: number,
            endurance: number,
            heal: number,
            history: number,
            insight: number,
            intimidate: number,
            nature: number,
            perception: number,
            religion: number,
            stealth: number,
            streetwise: number,
            thievery: number
        },
        powers: {
            atWill: string[],
            encounter: string[],
            daily: string[],
            utility: string[]
        },
        equipment: {
            weapons: string[],
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
        notes: string
    }
}