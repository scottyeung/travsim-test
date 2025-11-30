const API_KEY = "FILL_IN_YOUR_API_KEY";
const API_BASE_URL = "https://content.travsim.fr/api";

export const fetchContent = async <T>(
	template: string,
	countryOrRegionCode = "US",
	locale = "en-US"
): Promise<T> => {
	const url = `${API_BASE_URL}/${API_KEY}/content/${template}/${countryOrRegionCode}/${locale}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error fetching ${template}: ${response.statusText}`);
		}
		return (await response.json()) as T;
	} catch (error) {
		console.error(`Failed to fetch content for template ${template}:`, error);
		throw error;
	}
};
