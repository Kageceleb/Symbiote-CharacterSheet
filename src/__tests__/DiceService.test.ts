import { DiceService } from '../services/DiceService';

type TSDice = {
  putDiceInTray: (dice: { name: string; roll: string; }[], hideResults: boolean) => void;
};

describe('DiceService', () => {
  let mockPutDiceInTray: jest.Mock;

  beforeEach(() => {
    // Create a fresh mock for each test
    mockPutDiceInTray = jest.fn();
    // @ts-ignore - TS is a global variable that exists in the runtime environment
    global.TS = {
      dice: {
        putDiceInTray: mockPutDiceInTray
      }
    };
  });

  afterEach(() => {
    // Clean up after each test
    jest.resetAllMocks();
    // @ts-ignore - TS is a global variable that exists in the runtime environment
    global.TS = undefined;
  });

  describe('rollDice', () => {
    it('should call putDiceInTray with correct parameters', () => {
      const formula = '1d20+5';
      const title = 'Attack Roll';

      const result = DiceService.rollDice(formula, title);

      expect(mockPutDiceInTray).toHaveBeenCalledWith(
        [{ name: title, roll: formula }],
        false
      );
      expect(result).toEqual({
        title,
        formula,
        total: 0,
        values: [],
        modifier: 0
      });
    });

    it('should throw error when TS.dice is not available', () => {
      // @ts-ignore - TS is a global variable that exists in the runtime environment
      global.TS = undefined;
      
      expect(() => {
        DiceService.rollDice('1d20', 'Test Roll');
      }).toThrow('TS.dice is not available');
    });
  });

  describe('rollWithAdvantage', () => {
    it('should call putDiceInTray with two advantage rolls', () => {
      const formula = '1d20+5';
      const title = 'Attack Roll';

      const result = DiceService.rollWithAdvantage(formula, title);

      expect(mockPutDiceInTray).toHaveBeenCalledWith(
        [
          { name: `${title} (Advantage 1)`, roll: formula },
          { name: `${title} (Advantage 2)`, roll: formula }
        ],
        false
      );
      expect(result).toEqual({
        title: `${title} (with Advantage)`,
        formula,
        total: 0,
        values: [],
        modifier: 0
      });
    });

    it('should throw error when TS.dice is not available', () => {
      // @ts-ignore - TS is a global variable that exists in the runtime environment
      global.TS = undefined;
      
      expect(() => {
        DiceService.rollWithAdvantage('1d20', 'Test Roll');
      }).toThrow('TS.dice is not available');
    });
  });

  describe('rollWithDisadvantage', () => {
    it('should call putDiceInTray with two disadvantage rolls', () => {
      const formula = '1d20+5';
      const title = 'Attack Roll';

      const result = DiceService.rollWithDisadvantage(formula, title);

      expect(mockPutDiceInTray).toHaveBeenCalledWith(
        [
          { name: `${title} (Disadvantage 1)`, roll: formula },
          { name: `${title} (Disadvantage 2)`, roll: formula }
        ],
        false
      );
      expect(result).toEqual({
        title: `${title} (with Disadvantage)`,
        formula,
        total: 0,
        values: [],
        modifier: 0
      });
    });

    it('should throw error when TS.dice is not available', () => {
      // @ts-ignore - TS is a global variable that exists in the runtime environment
      global.TS = undefined;
      
      expect(() => {
        DiceService.rollWithDisadvantage('1d20', 'Test Roll');
      }).toThrow('TS.dice is not available');
    });
  });
}); 