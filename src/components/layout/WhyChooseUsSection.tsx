import type { FunctionComponent } from "../../common/types";
import { WhyChooseUsCard } from "../ui/WhyChooseUsCard";

const reasons = [
	{
		title: "Global Coverage",
		description:
			"Stay connected in over 190 countries with reliable data coverage.",
		icon: (
			<svg
				className="w-12 h-12  text-black"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
	{
		title: "Instant Activation",
		description:
			"Get connected immediately after purchase with our instant eSIM activation.",
		icon: (
			<svg
				className="w-12 h-12  text-black"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M13 10V3L4 14h7v7l9-11h-7z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
	{
		title: "Fully customisable",
		description:
			"You can customise your eSIM plan to suit your needs. Recharge or extend your plan anytime from our apps.",
		icon: (
			<svg
				className="w-12 h-12 text-black"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
	{
		title: "Apps are easy to use",
		description:
			"Our apps put you in the driving seat. Install your eSIM, check your data balance, manage plans, and contact support—all in just a few taps.",
		icon: (
			<svg
				className="w-12 h-12  text-black"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
	{
		title: "Compatibility",
		description:
			"Our eSIM works with a wide range of iOS and Android eSIM devices that support eSIM. See list of compatible devices.",
		icon: (
			<svg
				className="w-12 h-12  text-black"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
	{
		title: "24/7 Support",
		description:
			"You can get help with the app anytime. You can view FAQ sections, review guides or contact support.",
		icon: (
			<svg
				className="w-12 h-12  text-black"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		),
	},
];

export const WhyChooseUsSection = (): FunctionComponent => {
	return (
		<div className="w-full bg-white pt-[70px] pb-[70px] px-20">
			<div className="max-w-container mx-auto flex flex-col items-center gap-10">
				<h2 className="text-heading-lg text-black text-center">
					Why Choose us for your United States eSIM
				</h2>

				<div className="flex gap-6 w-full items-stretch">
					{/* Left Column - First 3 reasons */}
					<div className="flex-1 flex flex-col justify-between gap-6">
						{reasons.slice(0, 3).map((reason, index) => (
							<WhyChooseUsCard
								key={index}
								description={reason.description}
								icon={reason.icon}
								title={reason.title}
							/>
						))}
					</div>

					{/* Middle Column - Image */}
					<div className="flex-1">
						<div
							className="w-full h-full bg-cover bg-center rounded-3xl"
							style={{
								backgroundImage: "url(/assets/why-choose-us-91d641.png)",
							}}
						/>
					</div>

					{/* Right Column - Additional reasons */}
					<div className="flex-1 flex flex-col justify-between gap-6">
						{reasons.slice(3, 6).map((reason, index) => (
							<WhyChooseUsCard
								key={index + 3}
								description={reason.description}
								icon={reason.icon}
								title={reason.title}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};