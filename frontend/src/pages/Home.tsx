import React from "react";
import { PROJECT_NAME, PROJECT_YEAR, TEAM_MEMBERS } from "../constants/team";

const Home = (): React.JSX.Element => {
    return (
        <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-950">
            {/* Aurora blobs */}
            <div className="aurora-1 absolute left-[-10%] top-[-15%] h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
            <div className="aurora-2 absolute bottom-[-15%] right-[-10%] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="aurora-1 absolute bottom-[20%] left-[15%] h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-10 px-8 text-center">
                {/* Badge projet */}
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-xs uppercase tracking-widest text-violet-300">
                    {PROJECT_NAME} — {PROJECT_YEAR}
                </span>

                {/* Titre */}
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-light tracking-widest text-white/40 uppercase">
                        Bienvenue
                    </p>
                    <h1 className="text-6xl font-bold text-white md:text-8xl">
                        Bonjour
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                            l'équipe
                        </span>
                    </h1>
                </div>

                {/* Séparateur */}
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

                {/* Membres */}
                <div className="flex flex-wrap justify-center gap-3">
                    {TEAM_MEMBERS.map((name) => (
                        <span
                            key={name}
                            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base text-white/70 backdrop-blur-sm transition-colors hover:border-violet-400/40 hover:text-white"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;
