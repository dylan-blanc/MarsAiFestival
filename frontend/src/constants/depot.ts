export const DEPOT_ENDPOINT = "/api/depot";

export const FORM_STEPS = [
    { num: 1, title: "Profil réalisateur", sub: "Identité & contact" },
    { num: 2, title: "Le Film", sub: "Titre FR/EN, synopsis, vidéo" },
    { num: 3, title: "Déclaration IA", sub: "Type de prod. & outils" },
    { num: 4, title: "Confirmation", sub: "Récap & RGPD" },
] as const;

export const PAYS_OPTIONS = [
    { value: "FR", label: "🇫🇷 France" },
    { value: "BE", label: "🇧🇪 Belgique" },
    { value: "CH", label: "🇨🇭 Suisse" },
    { value: "CA", label: "🇨🇦 Canada" },
    { value: "MA", label: "🇲🇦 Maroc" },
    { value: "TN", label: "🇹🇳 Tunisie" },
    { value: "DZ", label: "🇩🇿 Algérie" },
    { value: "SN", label: "🇸🇳 Sénégal" },
    { value: "JP", label: "🇯🇵 Japon" },
    { value: "US", label: "🇺🇸 États-Unis" },
    { value: "GB", label: "🇬🇧 Royaume-Uni" },
    { value: "DE", label: "🇩🇪 Allemagne" },
    { value: "ES", label: "🇪🇸 Espagne" },
    { value: "IT", label: "🇮🇹 Italie" },
    { value: "BR", label: "🇧🇷 Brésil" },
    { value: "IN", label: "🇮🇳 Inde" },
    { value: "CN", label: "🇨🇳 Chine" },
    { value: "AU", label: "🇦🇺 Australie" },
    { value: "other", label: "🌍 Autre pays" },
] as const;

export const LANGUES_OPTIONS = [
    { value: "fr", label: "🇫🇷 Français" },
    { value: "en", label: "🇬🇧 Anglais" },
    { value: "es", label: "🇪🇸 Espagnol" },
    { value: "ar", label: "🌍 Arabe" },
    { value: "de", label: "🇩🇪 Allemand" },
    { value: "it", label: "🇮🇹 Italien" },
    { value: "pt", label: "🇧🇷 Portugais" },
    { value: "zh", label: "🇨🇳 Mandarin" },
    { value: "ja", label: "🇯🇵 Japonais" },
    { value: "sans", label: "🔇 Sans dialogue (film muet)" },
    { value: "autre", label: "Autre langue" },
] as const;

export const DECOUVERTE_OPTIONS = [
    { value: "rs", label: "Réseaux sociaux" },
    { value: "presse", label: "Presse / Média" },
    { value: "bouche", label: "Bouche à oreille" },
    { value: "ecole", label: "École / Université" },
    { value: "partenaire", label: "Partenaire / Festival" },
    { value: "newsletter", label: "Newsletter" },
    { value: "autre", label: "Autre" },
] as const;

export const REGLES_ESSENTIELLES = [
    { text: "Durée :", strong: "60 secondes" + " pile" },
    { text: "Formats :", strong: "MP4, MOV" },
    { text: "Résolution min. :", strong: "1920×1080 · Ratio 16:9" },
    { text: "Taille :", strong: "200 à 300 Mo" },
    { text: "Plusieurs films par réalisateur", strong: "autorisés" },
    { text: "Ouverture :", strong: "2 mois" + ", fermeture auto" },
] as const;

export const INPUT_CLASS =
    "bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-slate-100 text-sm w-full outline-none focus:border-cyan-400/40 focus:bg-cyan-400/5 transition-colors placeholder:text-slate-500/40";

export const INPUT_CLASS_ERROR =
    "bg-white/5 border border-red-400/50 rounded-xl px-3.5 py-3 text-slate-100 text-sm w-full outline-none focus:border-red-400/70 transition-colors placeholder:text-slate-500/40";

export const SELECT_CLASS =
    "bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-slate-100 text-sm w-full outline-none focus:border-cyan-400/40 transition-colors cursor-pointer";

export const TEXTAREA_CLASS =
    "bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-slate-100 text-sm w-full outline-none focus:border-cyan-400/40 focus:bg-cyan-400/5 transition-colors placeholder:text-slate-500/40 resize-y leading-relaxed";

export const SOCIAL_INPUT_CLASS =
    "bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-3.5 text-slate-100 text-sm w-full outline-none focus:border-cyan-400/40 transition-colors placeholder:text-slate-500/40";
