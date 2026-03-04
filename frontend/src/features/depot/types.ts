export interface Step1Data {
    civilite: "M." | "Mme" | "";
    prenom: string;
    nom: string;
    dateNaissance: string;
    metier: string;
    email: string;
    telephone: string;
    mobile: string;
    adresse: string;
    codePostal: string;
    ville: string;
    pays: string;
    youtube: string;
    instagram: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    decouverte: string;
    newsletter: boolean;
}

export interface Step2Data {
    titreFr: string;
    titreEn: string;
    langue: string;
    tags: string;
    synopsisFr: string;
    synopsisEn: string;
    videoFile: File | null;
    intention: string;
}

export interface Step3Data {
    iaClassification: "full" | "hybrid" | "";
    outilsImage: string;
    outilsSon: string;
    outilsScenario: string;
    outilsPostProd: string;
    subtitleFr: File | null;
    subtitleEn: File | null;
}

export interface Step4Data {
    rgpd1: boolean;
    rgpd2: boolean;
    rgpd3: boolean;
}

export interface DepotFormData {
    step1: Step1Data;
    step2: Step2Data;
    step3: Step3Data;
    step4: Step4Data;
}

export type DepotErrors = Record<string, string>;

export interface DepotResponse {
    dossierNumber: string;
    email: string;
}

export interface UseDepotFormReturn {
    currentStep: number;
    data: DepotFormData;
    errors: DepotErrors;
    isLoading: boolean;
    isSuccess: boolean;
    response: DepotResponse | null;
    updateStep1: (field: keyof Step1Data, value: string | boolean) => void;
    updateStep2: (field: keyof Step2Data, value: string | File | null) => void;
    updateStep3: (field: keyof Step3Data, value: string | File | null) => void;
    updateStep4: (field: keyof Step4Data, value: boolean) => void;
    goNext: () => void;
    goPrev: () => void;
    handleSubmit: () => Promise<void>;
}
