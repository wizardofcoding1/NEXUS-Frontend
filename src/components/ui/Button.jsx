<<<<<<< HEAD
=======
import { FiLoader } from "react-icons/fi";

>>>>>>> e10146984f554d5728d7023b097f180da318ef21
const Button = ({
    children,
    type = "submit",
    disabled,
    isLoading,
<<<<<<< HEAD
    className = "",
    ...props
}) => {
    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            className={`inline-flex items-center justify-center gap-2 ${className}`}
            {...props}
        >
            <span>{isLoading ? "Processing..." : children}</span>
=======
    loading,
    loadingLabel = "Processing...",
    loadingIcon: LoadingIcon = FiLoader,
    showSpinner = true,
    className = "",
    ...props
}) => {
    const busy = Boolean(isLoading ?? loading);
    return (
        <button
            type={type}
            disabled={disabled || busy}
            className={`inline-flex items-center justify-center gap-2 ${className}`}
            {...props}
        >
            {busy ? (
                <span className="inline-flex items-center justify-center gap-2">
                    {showSpinner && <LoadingIcon className="animate-spin" />}
                    {loadingLabel}
                </span>
            ) : (
                <span>{children}</span>
            )}
>>>>>>> e10146984f554d5728d7023b097f180da318ef21
        </button>
    );
};

export default Button;
