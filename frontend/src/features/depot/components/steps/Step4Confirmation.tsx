import type React from "react";
import type { DepotErrors, DepotFormData, Step4Data } from "../../types";

interface Step4ConfirmationProps {
    data: DepotFormData;
    errors: DepotErrors;
    onChange: (field: keyof Step4Data, value: boolean) => void;
}

const IA_LABELS: Record<string, string> = {
    full: "Génération intégrale (100% IA)",
    hybrid: "Production hybride (IA + Humain)",
};

const RGPD_ITEMS = [
    {
        field: "rgpd1" as const,
        title: "Cession de droits de diffusion",
        desc: "J'accorde à marsAI et à ses partenaires (La Plateforme, Mobile Film Festival) le droit de diffuser, projeter et archiver mon film dans le cadre du festival et de sa plateforme en ligne, pour une durée de 5 ans.",
    },
    {
        field: "rgpd2" as const,
        title: "Conformité RGPD",
        desc: "J'accepte que mes données personnelles (nom, email, pays) soient conservées 3 ans après le festival conformément au RGPD, puis supprimées ou anonymisées. Je peux exercer mes droits d'accès et de suppression à tout moment.",
    },
    {
        field: "rgpd3" as const,
        title: "Originalité de l'œuvre",
        desc: "Je certifie être l'auteur ou co-auteur de ce film, que celui-ci n'a pas été soumis à un autre festival concurrent, et que l'usage des outils IA déclarés est exact et complet.",
    },
] as const;

interface RecapRowProps {
    label: string;
    value: string;
}

const RecapRow = ({ label, value }: RecapRowProps): React.JSX.Element => (
    <div className="flex justify-between items-start py-2.5 border-b border-white/5 last:border-0 gap-4">
        <span className="text-xs text-slate-500 flex-shrink-0 w-36">{label}</span>
        <span className="text-xs text-slate-200 text-right">{value || "—"}</span>
    </div>
);

const Step4Confirmation = ({
    data,
    errors,
    onChange,
}: Step4ConfirmationProps): React.JSX.Element => {
    const { step1, step2, step3 } = data;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-2xl flex-shrink-0">
                    ✅
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-100">Confirmation &amp; Droits</h2>
                    <p className="text-sm text-slate-500">
                        Vérifiez votre dossier, acceptez les conditions et soumettez
                    </p>
                </div>
            </div>

            {/* Récapitulatif */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-5 py-3 bg-white/5 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Récapitulatif du dossier
                    </span>
                </div>
                <div className="px-5 py-2">
                    <RecapRow
                        label="Réalisateur"
                        value={`${step1.civilite} ${step1.prenom} ${step1.nom}`.trim()}
                    />
                    <RecapRow label="Date de naissance" value={step1.dateNaissance} />
                    <RecapRow label="Email" value={step1.email} />
                    <RecapRow label="Mobile" value={step1.mobile} />
                    <RecapRow
                        label="Ville / Pays"
                        value={[step1.ville, step1.pays].filter(Boolean).join(" · ")}
                    />
                    <RecapRow label="Titre du film (FR)" value={step2.titreFr} />
                    <RecapRow label="Titre (EN)" value={step2.titreEn} />
                    <RecapRow
                        label="Fichier vidéo"
                        value={step2.videoFile ? step2.videoFile.name : "—"}
                    />
                    <RecapRow
                        label="Type de production"
                        value={IA_LABELS[step3.iaClassification] ?? "—"}
                    />
                    <RecapRow label="Outils IA image" value={step3.outilsImage} />
                    <RecapRow
                        label="Sous-titres"
                        value={[step3.subtitleFr ? "FR ✓" : null, step3.subtitleEn ? "EN ✓" : null]
                            .filter(Boolean)
                            .join(" · ")}
                    />
                </div>
            </div>

            {/* Conditions RGPD */}
            <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Conditions obligatoires
                </span>
                {RGPD_ITEMS.map(({ field, title, desc }) => (
                    <label
                        key={field}
                        className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
                            data.step4[field]
                                ? "border-cyan-400/30 bg-cyan-400/5"
                                : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                        onClick={() => onChange(field, !data.step4[field])}
                    >
                        <div
                            className={`mt-0.5 w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                                data.step4[field]
                                    ? "bg-cyan-400 border-cyan-400"
                                    : "border-white/20"
                            }`}
                        >
                            {data.step4[field] && (
                                <span className="text-slate-950 text-xs font-bold">✓</span>
                            )}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-200 mb-1">
                                {title}{" "}
                                <span className="text-cyan-400 font-normal text-xs">
                                    ● obligatoire
                                </span>
                            </p>
                            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={data.step4[field]}
                            onChange={() => onChange(field, !data.step4[field])}
                            className="sr-only"
                        />
                    </label>
                ))}

                {(errors.rgpd1 || errors.rgpd2 || errors.rgpd3) && (
                    <p role="alert" className="text-xs text-red-400">
                        Vous devez accepter toutes les conditions pour soumettre votre film.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Step4Confirmation;
