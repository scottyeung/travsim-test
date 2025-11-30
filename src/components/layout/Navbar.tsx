import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../../common/types";
import { Button } from "../ui/Button";
import { useLocale } from "../../common/LocaleContext";

interface LanguageOption {
	code: string;
	countryCode: string;
	label: string;
}

const languageOptions: LanguageOption[] = [
	{ code: "en-US", countryCode: "US", label: "English" },
	{ code: "fr-FR", countryCode: "FR", label: "Français" },
];

export const Navbar = (): FunctionComponent => {
	const { t, i18n } = useTranslation();
	const { setCountryOrRegionCode } = useLocale();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const currentLanguage = languageOptions.find(
		(lang) => lang.code === i18n.language
	);

	const handleLanguageChange = (langCode: string, countryCode: string) => {
		void i18n.changeLanguage(langCode);
		setCountryOrRegionCode(countryCode);
		setIsDropdownOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav className="w-full bg-white border-b border-[#EBEBEB]">
			<div className="flex items-center gap-20 px-20 py-4 mx-auto">
				{/* Logo */}
				<div className="flex flex-col gap-[7.36px] py-[7.36px] w-[204px]">
					<img
						alt="BeachSIM"
						className="w-full h-auto p-6"
						src="/assets/beachsim-logo.svg"
					/>
				</div>

				{/* Search Bar */}
				<div className="flex-1">
					<div className="relative">
						<input
							className="w-full px-4 py-3 text-base bg-[#FDFDFD] border border-[#BFC8D0] rounded-lg focus:outline-none focus:border-blue-500"
							placeholder={t("navbar.whereToNext")}
							type="text"
						/>
						<img
							alt="Search"
							className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
							src="/assets/icons/search-md-icon.svg"
						/>
					</div>
				</div>

				{/* Navigation Links */}
				<div className="flex items-center gap-8">
					<button className="text-black text-lg font-normal hover:text-gray-700">
						{t("navbar.explore")}
					</button>
					<button className="text-black text-lg font-normal hover:text-gray-700">
						{t("navbar.help")}
					</button>
					{/* Language Switcher */}
					<div className="relative" ref={dropdownRef}>
						<button
							className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						>
							<img
								alt="Translate"
								className="w-6 h-6"
								src="/assets/icons/translate-icon.svg"
							/>
							<span className="text-black text-lg font-normal">
								{currentLanguage?.label || "Language"}
							</span>
							<svg
								className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 9l-7 7-7-7"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
								/>
							</svg>
						</button>
						{isDropdownOpen && (
							<div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
								{languageOptions.map((lang) => (
									<button
										key={lang.code}
										className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => handleLanguageChange(lang.code, lang.countryCode)}
									>
										{lang.label}
									</button>
								))}
							</div>
						)}
					</div>

					<div className="w-px h-8 bg-[#EBEBEB]" />
					<button className="p-2 hover:bg-gray-100 rounded-lg">
						<img
							alt="Currency"
							className="w-6 h-6"
							src="/assets/icons/currency-dollar-circle-icon.svg"
						/>
					</button>
					<Button
						className="px-[17px] py-[10px] text-[16px] font-bold"
						size="md"
						variant="primary"
					>
						{t("navbar.signIn")}
					</Button>
				</div>
			</div>
		</nav>
	);
};