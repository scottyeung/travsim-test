import type { FunctionComponent } from "../../common/types";

interface TabButtonProps {
	label: string;
	isActive?: boolean;
	onClick?: () => void;
}

export const TabButton = ({
	label,
	isActive = false,
	onClick,
}: TabButtonProps): FunctionComponent => {
	return (
		<button
			className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0 ${
				isActive
					? "bg-[#f3f3f3] border border-[#101828] border-solid"
					: "bg-white border border-[#d9d9d9] border-solid"
			}`}
			onClick={onClick}
		>
			<p
				style={{ fontVariationSettings: "'wdth' 100" }}
				className={`font-['Roboto:${
					isActive ? "SemiBold" : "Regular"
				}',sans-serif] font-${
					isActive ? "semibold" : "normal"
				} leading-[normal] relative shrink-0 text-[16px] ${
					isActive ? "text-[#101828]" : "text-black"
				}`}
			>
				{label}
			</p>
		</button>
	);
};
