export interface CharacterSheetProps {
    characterData: {
        name: string,
        class: string,
        lvl: number,
        stats: {
            strength: number,
            dexterity: number,
            constitution: number,
            intelligence: number,
            wisdom: number,
            charisma: number
        }
    }
}