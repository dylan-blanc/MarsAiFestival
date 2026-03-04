import { useState } from "react";
import { DEPOT_ENDPOINT } from "../../../constants/depot";
import { apiFetchForm } from "../../../services/api";
import type {
    DepotErrors,
    DepotFormData,
    DepotResponse,
    Step1Data,
    Step2Data,
    Step3Data,
    Step4Data,
    UseDepotFormReturn,
} from "../types";

const INITIAL_STEP1: Step1Data = {
    civilite: "",
    prenom: "",
    nom: "",
    dateNaissance: "",
    metier: "",
    email: "",
    telephone: "",
    mobile: "",
    adresse: "",
    codePostal: "",
    ville: "",
    pays: "",
    youtube: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    decouverte: "",
    newsletter: false,
};

const INITIAL_STEP2: Step2Data = {
    titreFr: "",
    titreEn: "",
    langue: "",
    tags: "",
    synopsisFr: "",
    synopsisEn: "",
    videoFile: null,
    intention: "",
};

const INITIAL_STEP3: Step3Data = {
    iaClassification: "",
    outilsImage: "",
    outilsSon: "",
    outilsScenario: "",
    outilsPostProd: "",
    subtitleFr: null,
    subtitleEn: null,
};

const INITIAL_STEP4: Step4Data = {
    rgpd1: false,
    rgpd2: false,
    rgpd3: false,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateStep = (step: number, data: DepotFormData): DepotErrors => {
    const errors: DepotErrors = {};

    if (step === 1) {
        if (!data.step1.civilite) errors.civilite = "Veuillez sélectionner votre civilité";
        if (!data.step1.prenom.trim()) errors.prenom = "Prénom requis";
        if (!data.step1.nom.trim()) errors.nom = "Nom requis";
        if (!data.step1.dateNaissance) errors.dateNaissance = "Date de naissance requise";
        if (!data.step1.metier.trim()) errors.metier = "Métier requis";
        if (!data.step1.email.trim()) errors.email = "Email requis";
        else if (!EMAIL_REGEX.test(data.step1.email))
            errors.email = "Adresse email invalide — vérifiez le format";
        if (!data.step1.mobile.trim()) errors.mobile = "Numéro de mobile requis";
        if (!data.step1.adresse.trim()) errors.adresse = "Adresse requise";
        if (!data.step1.codePostal.trim()) errors.codePostal = "Code postal requis";
        if (!data.step1.ville.trim()) errors.ville = "Ville requise";
        if (!data.step1.pays) errors.pays = "Sélectionnez votre pays";
    } else if (step === 2) {
        if (!data.step2.titreFr.trim()) errors.titreFr = "Titre en français requis";
        if (!data.step2.titreEn.trim()) errors.titreEn = "Titre en anglais requis";
        if (!data.step2.langue) errors.langue = "Langue du film requise";
        if (!data.step2.synopsisFr.trim()) errors.synopsisFr = "Synopsis en français requis";
        if (!data.step2.synopsisEn.trim()) errors.synopsisEn = "Synopsis en anglais requis";
        if (!data.step2.videoFile) {
            errors.videoFile = "Le fichier vidéo est requis";
        } else {
            const file = data.step2.videoFile;
            if (!["video/mp4", "video/quicktime"].includes(file.type))
                errors.videoFile = "Format invalide — MP4 ou MOV uniquement";
            const sizeMb = file.size / (1024 * 1024);
            if (sizeMb < 200 || sizeMb > 300)
                errors.videoFile = "Le fichier doit faire entre 200 et 300 Mo";
        }
        if (!data.step2.intention.trim()) errors.intention = "La note d'intention est requise";
    } else if (step === 3) {
        if (!data.step3.iaClassification)
            errors.iaClassification = "Veuillez sélectionner le type de production";
        if (!data.step3.outilsImage.trim())
            errors.outilsImage = "Veuillez indiquer les outils IA image / vidéo utilisés";
        if (!data.step3.subtitleFr) errors.subtitleFr = "Sous-titres français requis";
        if (!data.step3.subtitleEn) errors.subtitleEn = "Sous-titres anglais requis";
    } else if (step === 4) {
        if (!data.step4.rgpd1) errors.rgpd1 = "Vous devez accepter cette condition";
        if (!data.step4.rgpd2) errors.rgpd2 = "Vous devez accepter cette condition";
        if (!data.step4.rgpd3) errors.rgpd3 = "Vous devez certifier l'exactitude des informations";
    }

    return errors;
};

const buildFormData = (data: DepotFormData): FormData => {
    const fd = new FormData();

    Object.entries(data.step1).forEach(([key, value]) => {
        fd.append(key, typeof value === "boolean" ? (value ? "1" : "0") : value);
    });

    const { videoFile, ...step2Rest } = data.step2;
    Object.entries(step2Rest).forEach(([key, value]) => fd.append(key, value));
    if (videoFile) fd.append("videoFile", videoFile);

    const { subtitleFr, subtitleEn, ...step3Rest } = data.step3;
    Object.entries(step3Rest).forEach(([key, value]) => fd.append(key, value));
    if (subtitleFr) fd.append("subtitleFr", subtitleFr);
    if (subtitleEn) fd.append("subtitleEn", subtitleEn);

    Object.entries(data.step4).forEach(([key, value]) => {
        fd.append(key, value ? "1" : "0");
    });

    return fd;
};

const removeError = (prev: DepotErrors, field: string): DepotErrors => {
    const next = { ...prev };
    delete next[field];
    return next;
};

const useDepotForm = (): UseDepotFormReturn => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [data, setData] = useState<DepotFormData>({
        step1: INITIAL_STEP1,
        step2: INITIAL_STEP2,
        step3: INITIAL_STEP3,
        step4: INITIAL_STEP4,
    });
    const [errors, setErrors] = useState<DepotErrors>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [response, setResponse] = useState<DepotResponse | null>(null);

    const updateStep1 = (field: keyof Step1Data, value: string | boolean): void => {
        setData((prev) => ({ ...prev, step1: { ...prev.step1, [field]: value } }));
        setErrors((prev) => removeError(prev, field));
    };

    const updateStep2 = (field: keyof Step2Data, value: string | File | null): void => {
        setData((prev) => ({ ...prev, step2: { ...prev.step2, [field]: value } }));
        setErrors((prev) => removeError(prev, field));
    };

    const updateStep3 = (field: keyof Step3Data, value: string | File | null): void => {
        setData((prev) => ({ ...prev, step3: { ...prev.step3, [field]: value } }));
        setErrors((prev) => removeError(prev, field));
    };

    const updateStep4 = (field: keyof Step4Data, value: boolean): void => {
        setData((prev) => ({ ...prev, step4: { ...prev.step4, [field]: value } }));
        setErrors((prev) => removeError(prev, field));
    };

    const goNext = (): void => {
        const stepErrors = validateStep(currentStep, data);
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }
        setErrors({});
        setCurrentStep((prev) => Math.min(prev + 1, 4));
    };

    const goPrev = (): void => {
        setErrors({});
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (): Promise<void> => {
        const stepErrors = validateStep(4, data);
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }
        setIsLoading(true);
        try {
            const result = await apiFetchForm<DepotResponse>(DEPOT_ENDPOINT, buildFormData(data));
            setResponse(result);
            setIsSuccess(true);
        } catch {
            setErrors({ submit: "Une erreur est survenue. Veuillez réessayer." });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        currentStep,
        data,
        errors,
        isLoading,
        isSuccess,
        response,
        updateStep1,
        updateStep2,
        updateStep3,
        updateStep4,
        goNext,
        goPrev,
        handleSubmit,
    };
};

export default useDepotForm;
