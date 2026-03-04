import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("Home", () => {
    it("affiche le heading principal marsAI", () => {
        render(<Home />);
        expect(screen.getByRole("heading", { name: /mars\s*ai/i })).toBeDefined();
    });

    it("affiche le badge de l'édition", () => {
        render(<Home />);
        expect(screen.getByText(/Festival International/i)).toBeDefined();
    });

    it("affiche les partenaires", () => {
        render(<Home />);
        expect(screen.getByText(/La Plateforme/i)).toBeDefined();
        expect(screen.getByText(/Mobile Film Festival/i)).toBeDefined();
    });

    it("ouvre le lecteur vidéo au clic sur Démo", () => {
        render(<Home />);
        fireEvent.click(screen.getByRole("button", { name: /démo/i }));
        expect(screen.getByRole("dialog", { name: /lecteur vidéo/i })).toBeDefined();
    });
});
