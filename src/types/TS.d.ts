declare namespace TS {
  namespace dice {
    interface DiceRoll {
      name: string;
      roll: string;
    }

    function putDiceInTray(dice: DiceRoll[], hideResults?: boolean): void;
  }
} 