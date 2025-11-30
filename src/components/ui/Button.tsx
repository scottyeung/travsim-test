import type { FunctionComponent } from "../../common/types";

interface ButtonProps {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
	className?: string;
	fullWidth?: boolean;
}

export const Button = ({
	children,
	variant = "primary",
	size = "md",
	onClick,
	className = "",
	fullWidth = false,
}: ButtonProps): FunctionComponent => {
	const baseStyles =
		"font-medium rounded-lg transition-all inline-flex items-center justify-center";

	const variants = {
		primary: "bg-primary-red text-white hover:opacity-90",
		secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
		outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
	};

	const sizes = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-4.5 py-2.5 text-button", // 18px 500
		lg: "px-4.5 py-[22px] text-button", // Exact Figma specs: 22px 17px
	};

	const widthClass = fullWidth ? "w-full" : "";

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
