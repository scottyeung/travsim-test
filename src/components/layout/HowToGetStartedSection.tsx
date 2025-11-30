import { useState, useEffect } from "react";
import type { FunctionComponent } from "../../common/types";
import { fetchContent } from "../../services/api";
import { useTranslation } from "react-i18next";
import { useLocale } from "../../common/LocaleContext";

interface Step {
	icon: string;
	title: string;
	paragraph: string;
	image: string;
}

interface HowToGetStartedData {
	title: string;
	steps: Array<Step>;
}

export const HowToGetStartedSection = (): FunctionComponent => {
	const [howToGetStartedData, setHowToGetStartedData] =
		useState<HowToGetStartedData | null>(null);
	const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const { countryOrRegionCode } = useLocale();

	useEffect(() => {
		const loadHowToGetStarted = async () => {
			try {
				const data = await fetchContent<HowToGetStartedData>(
					"HowToGetStarted",
          countryOrRegionCode,
          i18n.language
				);
				setHowToGetStartedData(data);
			} catch (error) {
				console.error("Failed to load how to get started", error);
			} finally {
				setLoading(false);
			}
		};

		loadHowToGetStarted();
	}, [countryOrRegionCode, i18n.language]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!howToGetStartedData) {
		return <div>Error loading how to get started.</div>;
	}

	return (
		<div className="w-full bg-white pt-[70px] pb-[70px] px-20">
			<div className="max-w-container mx-auto flex flex-col items-start gap-6">
				<h2 className="text-heading-lg text-black">
					{howToGetStartedData.title}
				</h2>
				<p className="text-body-lg text-black">Get started in 3 easy steps</p>

				<div className="w-full flex gap-8 mt-8">
					{howToGetStartedData.steps.map((step, index) => (
						<div
							key={index}
							className="flex-1 flex flex-col items-start text-left gap-6 p-8 bg-gray-50 rounded-3xl"
						>
							<img src={step.icon} alt="" className="w-12 h-12" />
							<h3 className="text-xl font-bold text-black">{step.title}</h3>
							<img
								src={step.image}
								alt=""
								className="w-full h-auto rounded-2xl"
							/>
							<p className="text-body-lg text-black">{step.paragraph}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};