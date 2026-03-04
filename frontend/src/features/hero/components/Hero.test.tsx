import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "./Hero";

describe("Hero", () => {
    it("affiche le titre principal marsAI", () => {
        render(<Hero />);
        expect(screen.getByRole("heading", { name: /mars\s*ai/i })).toBeDefined();
    });

    it("affiche les quatre tags du concours", () => {
        render(<Hero />);
        expect(screen.getByText(/60s/i)).toBeDefined();
        expect(screen.getByText(/120\+/i)).toBeDefined();
        expect(screen.getByText(/100%/i)).toBeDefined();
    });

    it("ouvre le modal vidéo au clic sur le bouton Démo", () => {
        render(<Hero />);
        expect(screen.queryByRole("dialog")).toBeNull();
        fireEvent.click(screen.getByRole("button", { name: /démo/i }));
        expect(screen.getByRole("dialog", { name: /lecteur vidéo/i })).toBeDefined();
    });

    it("ferme le modal vidéo au clic sur le bouton Fermer", () => {
        render(<Hero />);
        fireEvent.click(screen.getByRole("button", { name: /démo/i }));
        fireEvent.click(screen.getByRole("button", { name: /fermer/i }));
        expect(screen.queryByRole("dialog")).toBeNull();
    });
});
