import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("Home", () => {
    it("affiche le titre Bonjour", () => {
        render(<Home />);
        expect(screen.getByRole("heading", { name: /bonjour/i })).toBeDefined();
    });

    it("affiche tous les membres de l'équipe", () => {
        render(<Home />);
        expect(screen.getByText("Mickael")).toBeDefined();
        expect(screen.getByText("Jean-Denis")).toBeDefined();
        expect(screen.getByText("Stéphane")).toBeDefined();
        expect(screen.getByText("Valérie")).toBeDefined();
        expect(screen.getByText("Wiem")).toBeDefined();
        expect(screen.getByText("Dylan")).toBeDefined();
    });

    it("affiche le badge du projet", () => {
        render(<Home />);
        expect(screen.getByText(/MarsAI Festival/i)).toBeDefined();
    });

    it("affiche le contenu dans un main", () => {
        render(<Home />);
        expect(screen.getByRole("main")).toBeDefined();
    });
});
