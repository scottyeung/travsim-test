import type { FunctionComponent } from "../../common/types";

interface PlanCardProps {
	dataAmount: string;
	validity: string;
	price: string;
	isBestValue?: boolean;
	isSelected?: boolean;
}

export const PlanCard = ({
	dataAmount,
	validity,
	price,
	isBestValue = false,
	isSelected = false,
}: PlanCardProps): FunctionComponent => {
	return (
		<div
			className={`relative p-6 rounded-lg border-2 transition-all cursor-pointer hover:shadow-lg ${
				isSelected
					? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50"
					: "border-gray-200 bg-white hover:border-gray-300"
			}`}
		>
			{isBestValue && (
				<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
					<span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
						Best value
					</span>
				</div>
			)}

			<div className="flex flex-col gap-4">
				<div className="flex justify-between items-start">
					<div className="flex items-center gap-2">
						<svg
							className="w-5 h-5 text-gray-700"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
							/>
						</svg>
						<span className="font-semibold text-lg text-gray-900">
							{dataAmount}
						</span>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<svg
						className="w-5 h-5 text-gray-700"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
						/>
					</svg>
					<span className="text-sm text-gray-600">{validity}</span>
				</div>

				<div className="pt-2 border-t border-gray-200">
					<span className="text-2xl font-bold text-gray-900">{price}</span>
				</div>
			</div>
		</div>
	);
};
