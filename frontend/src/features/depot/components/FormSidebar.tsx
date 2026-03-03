import type React from "react";
import { FORM_STEPS, REGLES_ESSENTIELLES } from "../../../constants/depot";

interface FormSidebarProps {
    currentStep: number;
}

const FormSidebar = ({ currentStep }: FormSidebarProps): React.JSX.Element => {
    return (
        <aside className="flex flex-col gap-6">
            {/* Bloc titre */}
            <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/80 mb-2">
                    Dépôt de film
                </p>
                <h1 className="text-lg font-black text-slate-100 leading-tight mb-1">
                    Candidature marsAI 2026
                </h1>
                <p className="text-xs text-slate-500 leading-relaxed">
                    Thème : &quot;Imaginez des futurs souhaitables&quot;
                </p>
            </div>

            {/* Navigation étapes */}
            <nav aria-label="Étapes du formulaire">
                <ol className="flex flex-col gap-1">
                    {FORM_STEPS.map(({ num, title, sub }) => {
                        const isDone = num < currentStep;
                        const isActive = num === currentStep;

                        return (
                            <li
                                key={num}
                                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${
                                    isActive ? "bg-white/5" : ""
                                }`}
                                aria-current={isActive ? "step" : undefined}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                                        isDone
                                            ? "bg-cyan-400/20 border border-cyan-400/40 text-cyan-400"
                                            : isActive
                                              ? "bg-cyan-400 text-slate-950"
                                              : "bg-white/5 border border-white/10 text-slate-500"
                                    }`}
                                >
                                    {isDone ? "✓" : num}
                                </div>
                                <div>
                                    <p
                                        className={`text-sm font-semibold ${
                                            isActive ? "text-slate-100" : "text-slate-500"
                                        }`}
                                    >
                                        {title}
                                    </p>
                                    <p className="text-xs text-slate-600">{sub}</p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </nav>

            {/* Règles essentielles */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Règles essentielles
                </h4>
                <ul className="flex flex-col gap-2">
                    {REGLES_ESSENTIELLES.map(({ text, strong }) => (
                        <li key={strong} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
                            <span className="text-xs text-slate-400 leading-relaxed">
                                {text} <strong className="text-slate-300">{strong}</strong>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default FormSidebar;
