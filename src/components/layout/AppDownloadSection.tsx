import type { FunctionComponent } from "../../common/types";

export const AppDownloadSection = (): FunctionComponent => {
	return (
		<div className="w-full bg-white pt-[70px] pb-35 px-26">
			<div className="max-w-container mx-auto">
				<div className="flex items-stretch gap-4">
					{/* Left Side - Phone Illustration */}
					<div className="flex items-center justify-center gap-12 px-12 bg-accent-blue rounded-3xl w-[457px]">
						{/* Phone mockup illustration */}
						<div className="relative w-[245px] h-[441px] my-12">
							{/* Phone frame */}
							<div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-[40px] border-4 border-black shadow-2xl">
								{/* Screen */}
								<div className="absolute inset-3 bg-white rounded-[32px] overflow-hidden">
									{/* Status bar */}
									<div className="h-8 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-between px-6">
										<span className="text-white text-xs font-semibold">
											9:41
										</span>
										<div className="flex gap-1">
											<div className="w-4 h-4 bg-white rounded-full" />
											<div className="w-4 h-4 bg-white rounded-full" />
											<div className="w-4 h-4 bg-white rounded-full" />
										</div>
									</div>
									{/* App content preview */}
									<div className="p-4 flex flex-col gap-3">
										<div className="h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg" />
										<div className="h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg" />
										<div className="h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg" />
										<div className="grid grid-cols-2 gap-2">
											<div className="h-20 bg-blue-100 rounded-lg" />
											<div className="h-20 bg-purple-100 rounded-lg" />
										</div>
									</div>
								</div>
								{/* Home indicator */}
								<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full" />
							</div>
						</div>
					</div>

					{/* Right Side - Content */}
					<div className="flex flex-col gap-12 pr-26 pl-16 flex-1 justify-center">
						<div className="flex flex-col gap-[22px]">
							<h2 className="text-heading-lg text-black">
								Wanna try it first? Get the App
							</h2>
							<p className="text-base text-black leading-[1.171875em]">
								Download our app and get 500MB free data to try in your
								hometown
							</p>
						</div>

						{/* App Store Badges */}
						<div className="flex items-center gap-[9.45px]">
							{/* App Store Badge */}
							<a
								className="block hover:opacity-80 transition-opacity"
								href="#"
							>
								<img
									alt="Download on the App Store"
									className="h-[42px] w-[126px]"
									src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
								/>
							</a>

							{/* Google Play Badge */}
							<a
								className="block hover:opacity-80 transition-opacity"
								href="#"
							>
								<img
									alt="Get it on Google Play"
									className="h-[42px] w-[141.75px]"
									src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
