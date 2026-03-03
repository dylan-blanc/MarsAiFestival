import type React from "react";

interface FormFieldProps {
    label: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
}

const FormField = ({
    label,
    error,
    required = false,
    children,
}: FormFieldProps): React.JSX.Element => {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {label}
                {required && <span className="text-cyan-400 ml-1">*</span>}
            </label>
            {children}
            {error && (
                <p role="alert" className="text-xs text-red-400 mt-0.5">
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormField;
