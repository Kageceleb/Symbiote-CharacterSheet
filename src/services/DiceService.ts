import { DiceRollResult } from '../types/DiceTypes';

export class DiceService {
  static rollDice(formula: string, title: string): DiceRollResult {
    if (typeof TS === 'undefined' || !TS.dice) {
      throw new Error('TS.dice is not available');
    }

    TS.dice.putDiceInTray([{ name: title, roll: formula }], false);
    
    // Return a minimal result since the actual values will be handled by TS.dice
    return {
      title,
      formula,
      total: 0,
      values: [],
      modifier: 0
    };
  }

  static rollWithAdvantage(formula: string, title: string): DiceRollResult {
    if (typeof TS === 'undefined' || !TS.dice) {
      throw new Error('TS.dice is not available');
    }

    TS.dice.putDiceInTray([
      { name: `${title} (Advantage 1)`, roll: formula },
      { name: `${title} (Advantage 2)`, roll: formula }
    ], false);

    return {
      title: `${title} (with Advantage)`,
      formula,
      total: 0,
      values: [],
      modifier: 0
    };
  }

  static rollWithDisadvantage(formula: string, title: string): DiceRollResult {
    if (typeof TS === 'undefined' || !TS.dice) {
      throw new Error('TS.dice is not available');
    }

    TS.dice.putDiceInTray([
      { name: `${title} (Disadvantage 1)`, roll: formula },
      { name: `${title} (Disadvantage 2)`, roll: formula }
    ], false);

    return {
      title: `${title} (with Disadvantage)`,
      formula,
      total: 0,
      values: [],
      modifier: 0
    };
  }
} 