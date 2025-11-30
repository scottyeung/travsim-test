import { useState, useEffect } from "react";
import type { FunctionComponent } from "../../common/types";
import { fetchContent } from "../../services/api";
import { useTranslation } from "react-i18next";
import { useLocale } from "../../common/LocaleContext";

interface Feature {
	title: string;
	our: string;
	other: string;
	wifi: string;
	roaming: string;
}

interface HowWeCompareData {
	title: string;
	headers: string[];
	features: Feature[];
}

const CheckIcon = () => (
	<svg
		className="w-6 h-6 text-green-500"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			d="M5 13l4 4L19 7"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
		/>
	</svg>
);

const XIcon = () => (
	<svg
		className="w-6 h-6 text-red-500"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			d="M6 18L18 6M6 6l12 12"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
		/>
	</svg>
);

const Cell = ({ content }: { content: string }): FunctionComponent => {
	if (content.toLowerCase() === "true") {
		return <CheckIcon />;
	}
	if (content.toLowerCase() === "false") {
		return <XIcon />;
	}
	return <p className="text-sm text-center text-black">{content}</p>;
};

export const ComparisonTable = (): FunctionComponent => {
	const [howWeCompareData, setHowWeCompareData] =
		useState<HowWeCompareData | null>(null);
	const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const { countryOrRegionCode } = useLocale();

	useEffect(() => {
		const loadHowWeCompare = async () => {
			try {
				const data = await fetchContent<HowWeCompareData>(
					"HowWeCompare",
					countryOrRegionCode,
					i18n.language
				);
				setHowWeCompareData(data);
			} catch (error) {
				console.error("Failed to load how we compare", error);
			} finally {
				setLoading(false);
			}
		};

		loadHowWeCompare();
	}, [countryOrRegionCode, i18n.language]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!howWeCompareData) {
		return <div>Error loading how we compare.</div>;
	}

	return (
		<div className="w-full bg-background-light pt-35 pb-[70px] px-26">
			<div className="max-w-container mx-auto flex flex-col items-center gap-10">
				<h2 className="text-heading-lg text-black text-center">
					{howWeCompareData.title}
				</h2>

				<div className="w-full bg-background-light rounded-3xl overflow-hidden">
					<div className="flex items-stretch">
						{/* Features Column */}
						<div className="flex flex-col py-8 flex-1">
							<div className="h-[104px] border-b border-gray-200"></div>
							{howWeCompareData.features.map((item, index) => (
								<div
									key={`feature-${index}`}
									className="px-0 py-4 border-b border-gray-200 flex items-center min-h-16"
								>
									<p className="text-sm font-medium text-black">{item.title}</p>
								</div>
							))}
						</div>

						{/* Dynamic Columns */}
						{howWeCompareData.headers.map((header, colIndex) => (
							<div
								key={colIndex}
								className={`flex flex-col py-8 flex-1 ${colIndex === 0 ? "bg-background-pink rounded-4xl" : ""
									}`}
							>
								<div className="h-[104px] border-b border-gray-200 flex items-center justify-center px-4">
									{colIndex === 0 ? (
										<img
											alt="BeachSIM"
											className="w-full h-auto"
											src="/assets/beachsim-logo.svg"
										/>
									) : (
										<h3 className="text-lg text-black text-center">
											{header}
										</h3>
									)}
								</div>
								{howWeCompareData.features.map((item, rowIndex) => (
									<div
										key={`${header}-${rowIndex}`}
										className="px-4 py-4 border-b border-gray-200 flex items-center justify-center min-h-16"
									>
										<Cell content={item[Object.keys(item)[colIndex + 1] as keyof Feature]} />
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};