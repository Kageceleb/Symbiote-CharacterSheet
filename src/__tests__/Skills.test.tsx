import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Skills } from "../components/Skills";

// Mock the global TS object for dice rolling
global.TS = {
  dice: {
    putDiceInTray: jest.fn(),
  },
};

const mockCharacterData = {
  stats: {
    strength: 16,
    dexterity: 14,
    constitution: 12,
    intelligence: 10,
    wisdom: 8,
    charisma: 15,
  },
  proficiencyBonus: 3,
  skills: [
    {
      name: "Acrobatics",
      ability: "dexterity",
      isProficient: true,
    },
    {
      name: "Animal Handling",
      ability: "wisdom",
      isProficient: false,
    },
    {
      name: "Arcana",
      ability: "intelligence",
      isProficient: false,
    },
    {
      name: "Athletics",
      ability: "strength",
      isProficient: true,
    },
  ],
};

describe("Skills component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all skills with correct names and abilities", () => {
    render(<Skills characterData={mockCharacterData as any} />);
    expect(screen.getByText("Acrobatics (dexterity)")).toBeInTheDocument();
    expect(screen.getByText("Animal Handling (wisdom)")).toBeInTheDocument();
    expect(screen.getByText("Arcana (intelligence)")).toBeInTheDocument();
    expect(screen.getByText("Athletics (strength)")).toBeInTheDocument();
  });

  it("renders correct modifiers for each skill", () => {
    render(<Skills characterData={mockCharacterData as any} />);
    // Acrobatics: DEX 14 = +2, +3 proficiency = +5
    expect(screen.getAllByText("+5")[0]).toBeInTheDocument();
    // Animal Handling: WIS 8 = -1, no proficiency
    expect(screen.getByText("-1")).toBeInTheDocument();
    // Arcana: INT 10 = +0, no proficiency
    expect(screen.getByText("+0")).toBeInTheDocument();
    // Athletics: STR 16 = +3, +3 proficiency = +6
    expect(screen.getByText("+6")).toBeInTheDocument();
  });

  it("calls TS.dice.putDiceInTray with correct parameters when clicking on a skill modifier", () => {
    render(<Skills characterData={mockCharacterData as any} />);
    // Click on Acrobatics modifier
    const acrobaticsMod = screen.getAllByText("+5")[0].closest(".skill-mod") as HTMLElement;
    fireEvent.click(acrobaticsMod);
    expect(global.TS.dice.putDiceInTray).toHaveBeenCalledWith(
      [{ name: "Acrobatics Check", roll: "1d20+5" }],
      false
    );
  });

  it("formats positive, negative, and zero modifiers correctly", () => {
    render(<Skills characterData={mockCharacterData as any} />);
    expect(screen.getAllByText("+5")[0]).toBeInTheDocument();
    expect(screen.getByText("-1")).toBeInTheDocument();
    expect(screen.getByText("+0")).toBeInTheDocument();
  });
});