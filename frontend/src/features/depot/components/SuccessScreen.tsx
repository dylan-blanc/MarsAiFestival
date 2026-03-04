import type React from "react";
import type { DepotResponse } from "../types";

interface SuccessScreenProps {
    response: DepotResponse | null;
}

const SuccessScreen = ({ response }: SuccessScreenProps): React.JSX.Element => {
    return (
        <div className="flex flex-col items-center text-center py-16 px-8 max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-cyan-400/10 border-2 border-cyan-400/30 flex items-center justify-center text-4xl mb-6">
                🎬
            </div>

            <h2 className="text-3xl font-black text-slate-100 mb-3">Dossier enregistré !</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
                Votre film a été reçu. Une confirmation a été envoyée à votre adresse validée.
            </p>

            {response && (
                <>
                    <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-6 py-3.5 mb-4">
                        <span className="text-slate-400 text-sm">📄 Dossier n°</span>
                        <span className="font-mono font-bold text-cyan-400">
                            {response.dossierNumber}
                        </span>
                    </div>

                    <p className="text-sm text-slate-500 mb-10">
                        Email de confirmation envoyé à{" "}
                        <strong className="text-slate-300">{response.email}</strong>
                    </p>
                </>
            )}

            <div className="w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8">
                <div className="px-5 py-3 bg-white/5 border-b border-white/10 flex items-center gap-2">
                    <span>⏳</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Prochaines étapes
                    </span>
                </div>
                <div className="flex flex-col divide-y divide-white/5">
                    {[
                        { icon: "⏳", text: "Présélection jury — résultats sous 1 mois" },
                        { icon: "📢", text: "Les 50 finalistes annoncés à J+90" },
                        { icon: "🏆", text: "Cérémonie à Marseille · Mars.AI Night" },
                    ].map(({ icon, text }) => (
                        <div key={text} className="flex items-center gap-3 px-5 py-3.5">
                            <span>{icon}</span>
                            <span className="text-sm text-slate-300">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-slate-300 text-sm font-medium transition-colors hover:border-cyan-400/40 hover:text-slate-100"
            >
                ← Retour à l&apos;accueil
            </a>
        </div>
    );
};

export default SuccessScreen;
