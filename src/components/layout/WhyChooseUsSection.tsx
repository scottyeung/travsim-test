import type { FunctionComponent } from "../../common/types";
import { WhyChooseUsCard } from "../ui/WhyChooseUsCard";

const reasons = [
	{
		title: "Clear simple pricing",
		description:
			"Our plans are fully prepaid with no roaming fees or hidden charges. No overages. Transparent pricing always. lorem ipsum ",
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16 16H16.02M4 10.4L4 19.349C4 20.3274 4 20.8166 4.11052 21.2769C4.20851 21.6851 4.37012 22.0752 4.58944 22.4331C4.83681 22.8368 5.18271 23.1827 5.87451 23.8745L21.2118 39.2118C23.5879 41.5879 24.7759 42.7759 26.1459 43.2211C27.351 43.6126 28.649 43.6126 29.8541 43.2211C31.2241 42.7759 32.4121 41.5879 34.7882 39.2118L39.2118 34.7882C41.5879 32.4121 42.7759 31.2241 43.2211 29.8541C43.6126 28.649 43.6126 27.351 43.2211 26.1459C42.7759 24.7759 41.5879 23.5879 39.2118 21.2118L23.8745 5.87452C23.1827 5.18271 22.8368 4.83681 22.4331 4.58944C22.0752 4.37012 21.6851 4.20851 21.2769 4.11052C20.8166 4 20.3274 4 19.349 4L10.4 4C8.15979 4 7.03969 4 6.18404 4.43597C5.43139 4.81947 4.81947 5.43139 4.43598 6.18404C4 7.03969 4 8.15979 4 10.4ZM17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>

		),
	},
	{
		title: "One eSIM, Multiple Trips lorem",
		description:
			"Install our eSIM once and reuse it for future trips—just purchase a data package for your next destination from the app ",
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 28.5727C6.29728 30.2061 4 32.4823 4 35C4 39.9706 12.9543 44 24 44C35.0457 44 44 39.9706 44 35C44 32.4823 41.7027 30.2061 38 28.5727M36 16C36 24.1274 27 28 24 34C21 28 12 24.1274 12 16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16ZM26 16C26 17.1046 25.1046 18 24 18C22.8954 18 22 17.1046 22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16Z" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>

		),
	},
	{
		title: "Fully customisable",
		description:
			"You can customise your eSIM plan to suit your needs. Recharge or extend your plan anytime from our apps.",
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M31.2627 15.2627C30.4707 14.4707 30.0747 14.0747 29.9263 13.618C29.7958 13.2163 29.7958 12.7837 29.9263 12.382C30.0747 11.9253 30.4707 11.5293 31.2627 10.7373L36.9395 5.06051C35.4331 4.37925 33.7608 4 32 4C25.3726 4 20 9.37258 20 16C20 16.9821 20.118 17.9366 20.3405 18.8502C20.5788 19.8285 20.698 20.3176 20.6769 20.6267C20.6547 20.9502 20.6065 21.1223 20.4573 21.4102C20.3148 21.6852 20.0417 21.9583 19.4956 22.5044L7 35C5.34315 36.6569 5.34315 39.3431 7 41C8.65686 42.6569 11.3432 42.6569 13 41L25.4956 28.5044C26.0417 27.9583 26.3148 27.6852 26.5898 27.5427C26.8777 27.3935 27.0498 27.3453 27.3733 27.3232C27.6824 27.302 28.1715 27.4212 29.1498 27.6595C30.0634 27.882 31.0179 28 32 28C38.6274 28 44 22.6274 44 16C44 14.2392 43.6208 12.5669 42.9395 11.0605L37.2627 16.7373C36.4707 17.5293 36.0747 17.9253 35.618 18.0737C35.2163 18.2042 34.7837 18.2042 34.382 18.0737C33.9253 17.9253 33.5293 17.5293 32.7373 16.7373L31.2627 15.2627Z" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		),
	},
	{
		title: "Apps are easy to use",
		description:
			"Our apps put you in the driving seat. Install your eSIM, check your data balance, manage plans, and contact support—all in just a few taps.",
		icon: (
			<svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.53051 26.0786L12.5013 12.4516C12.9525 11.2145 14.3402 10.5989 15.5601 11.0946C16.7502 11.5781 17.3224 12.9352 16.838 14.1248L15.4565 17.5178C15.3715 17.7264 15.6428 17.8944 15.7917 17.7255L22.8452 9.72597C23.7165 8.73784 25.2429 8.6957 26.1674 9.63424C27.0179 10.4977 27.0407 11.8768 26.2192 12.7679L19.4129 20.1516L21.9136 17.5127C22.802 16.5752 24.3185 16.6555 25.1029 17.6816C25.7357 18.5093 25.6651 19.676 24.9372 20.4214L22.3799 23.0401L24.1095 21.287C25.0503 20.3334 26.6284 20.4794 27.3785 21.5893C27.9476 22.4316 27.8395 23.5593 27.1206 24.2781L25.3546 26.0439L26.2294 25.2337C27.2142 24.3214 28.7782 24.4901 29.5458 25.5914C30.1385 26.4416 30.0658 27.5943 29.3353 28.3295C25.4682 32.2213 22.34 33.8487 17.7153 36.7477M7.53051 26.0786L17.7153 36.7477M7.53051 26.0786C6.94858 25.4781 5.98595 25.4757 5.40113 26.0734L1.28522 30.2799C0.90207 30.6715 0.905337 31.2985 1.29255 31.6861L12.2939 42.6977C12.6935 43.0977 13.345 43.087 13.7314 42.6743L17.7153 38.4181C18.1552 37.9481 18.1552 37.2176 17.7153 36.7477M13.661 6.60832L11.0154 4.98085M17.7153 4.98085L16.5946 1.00049M22.0944 4.98085L23.8326 2.91051" stroke="#475467" stroke-width="2" stroke-linecap="round" />
			</svg>

		),
	},
	{
		title: "Compatibility",
		description:
			"Our eSIM works with a wide range of iOS and Android eSIM devices that support eSIM. See list of compatible devices.",
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4 29.0001L23.2845 38.6424C23.5468 38.7735 23.678 38.8391 23.8156 38.8649C23.9375 38.8878 24.0625 38.8878 24.1844 38.8649C24.322 38.8391 24.4532 38.7735 24.7155 38.6424L44 29.0001M4 19.0001L23.2845 9.3579C23.5468 9.22672 23.678 9.16113 23.8156 9.13531C23.9375 9.11245 24.0625 9.11245 24.1844 9.13531C24.322 9.16113 24.4532 9.22672 24.7155 9.3579L44 19.0001L24.7155 28.6424C24.4532 28.7735 24.322 28.8391 24.1844 28.8649C24.0625 28.8878 23.9375 28.8878 23.8156 28.8649C23.678 28.8391 23.5468 28.7735 23.2845 28.6424L4 19.0001Z" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>

		),
	},
	{
		title: "24/7 Support",
		description:
			"You can get help with the app anytime. You can view FAQ sections, review guides or contact support.",
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M39.4545 20C39.4545 11.3842 32.4238 4 23.8545 4C15.2852 4 8.52237 11.3842 8.52237 20M39.4545 20H38.9091C36.7 20 34.9091 21.7909 34.9091 24V30C34.9091 32.2091 36.7 34 38.9091 34H39.4545M39.4545 20H40C42.2091 20 44 21.7909 44 24V30C44 32.2091 42.2091 34 40 34H39.4545M8.52237 20H8C5.79086 20 4 21.7909 4 24V30C4 32.2091 5.79086 34 8 34H9.09091C11.3 34 13.0909 32.2091 13.0909 30V24C13.0909 21.7909 11.3 20 9.09091 20H8.52237ZM39.4545 34C38.5455 38 35.6364 42.4 31.2727 44" stroke="#475467" stroke-width="2" stroke-linecap="round" />
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