import React, { useState } from "react";
import {
    HERO_BADGE_TEXT,
    HERO_DEADLINE,
    HERO_DEADLINE_LABEL,
    HERO_DEPOT_PATH,
    HERO_TAGS,
    HERO_VIDEO_URL,
} from "../../../constants/hero";
import useCountdown from "../hooks/useCountdown";

const Hero = (): React.JSX.Element => {
    const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);
    const { days, hours, minutes, seconds } = useCountdown(HERO_DEADLINE);

    const handleOpenPlayer = (): void => setIsPlayerOpen(true);
    const handleClosePlayer = (): void => setIsPlayerOpen(false);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.target === e.currentTarget) handleClosePlayer();
    };

    const pad = (n: number): string => String(n).padStart(2, "0");

    const countdownUnits = [
        { num: days, label: "Jours" },
        { num: hours, label: "Heures" },
        { num: minutes, label: "Minutes" },
        { num: seconds, label: "Secondes" },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center px-10 pt-28 pb-16 overflow-hidden bg-slate-950 text-slate-100"
        >
            {/* ── Aurores en arrière-plan ── */}
            <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                <div className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full bg-cyan-400/5 blur-3xl [animation:aurora1_10s_ease-in-out_infinite_alternate]" />
                <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-purple-400/5 blur-3xl [animation:aurora2_13s_ease-in-out_infinite_alternate]" />
            </div>

            {/* ── Grille hero ── */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl w-full my-auto">
                {/* ── Colonne gauche ── */}
                <div className="flex flex-col">
                    {/* Partenaires */}
                    <div className="inline-flex items-center gap-3 mb-6 self-start bg-white/5 border border-white/10 rounded-full px-6 py-2.5 backdrop-blur-sm flex-wrap">
                        <span className="text-xs font-medium tracking-widest uppercase text-slate-500 pr-3 border-r border-white/10 whitespace-nowrap">
                            Une co-création
                        </span>
                        <span className="text-sm font-semibold text-slate-300 tracking-wide">
                            La Plateforme
                        </span>
                        <span className="text-slate-500 text-sm">&amp;</span>
                        <span className="text-sm font-semibold text-slate-300 whitespace-nowrap">
                            Mobile Film Festival
                        </span>
                    </div>

                    {/* Badge édition */}
                    <div className="inline-flex items-center gap-3 mb-6 self-start bg-cyan-400/10 border border-cyan-400/30 rounded-full px-5 py-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
                            {HERO_BADGE_TEXT}
                        </span>
                    </div>

                    {/* Titre */}
                    <h1 className="font-black tracking-tight leading-none mb-3 text-[clamp(2.8rem,6vw,6.5rem)]">
                        mars
                        <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                            AI
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        <strong className="text-slate-100">
                            Le premier festival mondial du cinéma généré par intelligence
                            artificielle.
                        </strong>
                    </p>

                    {/* Tags */}
                    <div className="grid grid-cols-4 gap-2.5 mb-9 max-w-sm">
                        {HERO_TAGS.map((tag) => (
                            <div
                                key={tag.value}
                                className="bg-white/5 border border-white/10 rounded-xl py-3.5 px-3 text-center text-xs text-slate-100 whitespace-nowrap transition-colors hover:border-cyan-400/25 hover:bg-white/10 select-none"
                            >
                                <strong className="text-cyan-400 font-bold">{tag.value}</strong>{" "}
                                {tag.label}
                            </div>
                        ))}
                    </div>

                    {/* Accroche + CTA */}
                    <div className="pt-8 border-t border-cyan-400/10">
                        <p className="font-bold leading-snug mb-8 text-slate-100 text-[clamp(1.4rem,2.5vw,2rem)]">
                            Voici ce qu&apos;une IA peut créer.
                            <br />
                            <span className="text-cyan-300">Imaginez ce que vous allez faire.</span>
                        </p>
                        <div className="flex items-center gap-4 flex-wrap">
                            <a
                                href={HERO_DEPOT_PATH}
                                className="inline-flex items-center gap-2.5 bg-yellow-300 text-slate-950 px-8 py-4 rounded-full font-bold text-base tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(253,224,71,0.4)]"
                            >
                                Soumettre un film
                                <span className="w-5 h-5 rounded-full bg-slate-950/20 inline-flex items-center justify-center text-xs">
                                    →
                                </span>
                            </a>
                            <button
                                type="button"
                                onClick={handleOpenPlayer}
                                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/15 text-slate-300 font-medium text-sm transition-colors hover:border-cyan-400/40 hover:text-slate-100 cursor-pointer"
                            >
                                <span className="w-6 h-6 rounded-full border border-white/20 inline-flex items-center justify-center text-xs text-cyan-400">
                                    ▶
                                </span>
                                Démo
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Colonne droite ── */}
                <div className="flex flex-col justify-between items-end gap-16">
                    {/* Watermark Marseille */}
                    <p
                        aria-hidden="true"
                        className="font-black tracking-widest uppercase text-right bg-gradient-to-r from-cyan-400/15 via-white/25 to-purple-400/15 bg-clip-text text-transparent select-none leading-none text-[clamp(2rem,3.5vw,3.2rem)]"
                    >
                        Marseille
                    </p>

                    {/* Countdown */}
                    <div className="flex flex-col items-end gap-2">
                        <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400/80 whitespace-nowrap">
                            Clôture des dépôts · {HERO_DEADLINE_LABEL}
                        </span>
                        <div className="flex items-center gap-2.5">
                            {countdownUnits.map((unit, i) => (
                                <React.Fragment key={unit.label}>
                                    {i > 0 && (
                                        <span className="font-mono text-xl font-light text-cyan-400/30 pb-3.5 [animation:sep-pulse_2s_ease-in-out_infinite]">
                                            :
                                        </span>
                                    )}
                                    <div className="flex flex-col items-center bg-white/5 border border-cyan-400/10 rounded-xl px-5 py-4 min-w-20 transition-colors hover:border-cyan-400/30">
                                        <span className="font-mono text-3xl font-semibold text-slate-100 leading-none tabular-nums">
                                            {pad(unit.num)}
                                        </span>
                                        <span className="text-xs text-slate-500 tracking-widest uppercase mt-1.5 font-medium">
                                            {unit.label}
                                        </span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Modal Player ── */}
            {isPlayerOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Lecteur vidéo"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm"
                    onClick={handleBackdropClick}
                >
                    <div className="relative w-full max-w-4xl mx-4">
                        <button
                            type="button"
                            onClick={handleClosePlayer}
                            className="absolute -top-10 right-0 text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors"
                        >
                            Fermer ✕
                        </button>
                        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
                            <video
                                src={HERO_VIDEO_URL}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            >
                                Votre navigateur ne supporte pas la lecture vidéo.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
