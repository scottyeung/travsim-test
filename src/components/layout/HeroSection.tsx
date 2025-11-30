import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../../common/types";
import { StarRating } from "../ui/StarRating";
import { ImageCarousel } from "./HeroSection/ImageCarousel";
import { PackageSelection } from "./HeroSection/PackageSelection";
import { Benefits } from "./HeroSection/Benefits";
import { TabsSection } from "./HeroSection/TabsSection";

const plans = [
	{
		dataAmount: "5 GB",
		validity: "14 Days",
		price: "$ 29.99",
		isBestValue: false,
	},
	{
		dataAmount: "10 GB",
		validity: "21 Days",
		price: "$ 29.99",
		isBestValue: true,
	},
	{
		dataAmount: "15 GB",
		validity: "21 Days",
		price: "$ 29.99",
		isBestValue: false,
	},
	{
		dataAmount: "25 GB",
		validity: "30 Days",
		price: "$ 29.99",
		isBestValue: false,
	},
	{
		dataAmount: "30 GB",
		validity: "30 Days",
		price: "$ 29.99",
		isBestValue: false,
	},
	{
		dataAmount: "30 GB",
		validity: "30 Days",
		price: "$ 29.99",
		isBestValue: false,
	},
];

export const HeroSection = (): FunctionComponent => {
	const { t } = useTranslation();
	const [selectedPlan, setSelectedPlan] = useState(1);
	const [activeTab, setActiveTab] = useState("description");

	return (
		<div
			className="w-full bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url(/assets/hero-background.png)" }}
		>
			<div className="max-w-container mx-auto px-20 pt-[70px] pb-[70px] flex flex-col items-center gap-10">
				<div className="flex flex-row gap-[56px] items-start w-full">
					<div className="basis-2/3">
						<ImageCarousel />
					</div>

					{/* Right Column - Content */}
					<div className="flex flex-col gap-[56px] basis-1/3">
						{/* Title and Reviews */}
						<div className="flex flex-col gap-4">
							<h1 className="text-4xl font-bold text-black" data-node-id="1:1323" style={{ fontVariationSettings: "'wdth' 100" }}>
								{t("heroSection.title")}
							</h1>
							<div className="flex items-center gap-2">
								<span className="text-base font-bold text-black" data-node-id="1:1325" style={{ fontVariationSettings: "'wdth' 100" }}>
									{t("heroSection.excellent")}
								</span>
								<StarRating rating={5} />
								<span className="text-sm text-black" data-node-id="1:1327" style={{ fontVariationSettings: "'wdth' 100" }}>
									{t("heroSection.basedOn", { count: 1764 })}
								</span>
								<img
									alt="Trustpilot"
									className="h-6 ml-6"
									src="/assets/trustpilot-logo.svg"
								/>
							</div>
						</div>

						<PackageSelection
							plans={plans}
							selectedPlan={selectedPlan}
							setSelectedPlan={setSelectedPlan}
						/>

						<Benefits />
						<TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
					</div>
				</div>

			</div>
			</div>
	);
};
