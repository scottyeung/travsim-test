import type { FunctionComponent } from "../../common/types";

interface WhyChooseUsCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export const WhyChooseUsCard = ({
	icon,
	title,
	description,
}: WhyChooseUsCardProps): FunctionComponent => {
	return (
		<div className="flex flex-col p-6 px-8 bg-[#F3F3F3] border border-[#BFC8D0] rounded-3xl h-full">
			<div className="w-16 h-16 rounded-2xl flex">
				{icon}
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="text-xl font-bold text-black">
					{title}
				</h3>
				<p className="text-sm text-black">{description}</p>
			</div>
		</div>
	);
};
