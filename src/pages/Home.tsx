import type { FunctionComponent } from "../common/types";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/layout/HeroSection";
import { UseCasesSection } from "../components/layout/UseCasesSection";
import { FeaturesSection } from "../components/layout/FeaturesSection";
import { CTASection } from "../components/layout/CTASection";
import { ComparisonTable } from "../components/ui/ComparisonTable";
import { WhyChooseUsSection } from "../components/layout/WhyChooseUsSection";
import { HowToGetStartedSection } from "../components/layout/HowToGetStartedSection";
import { YouMayAlsoLikeSection } from "../components/layout/YouMayAlsoLikeSection";
import { FAQSection } from "../components/layout/FAQSection";
import { TestimonialsSection } from "../components/layout/TestimonialsSection";
import { BlogSection } from "../components/layout/BlogSection";
import { AppDownloadSection } from "../components/layout/AppDownloadSection";
import { Footer } from "../components/layout/Footer";

export const Home = (): FunctionComponent => {
	return (
		<div className="min-h-screen bg-white w-full mx-auto">
			<Navbar />
			<HeroSection />
			<UseCasesSection />
			<FeaturesSection />
			<CTASection />
			<ComparisonTable />
			<WhyChooseUsSection />
			<HowToGetStartedSection />
			<YouMayAlsoLikeSection />
			<FAQSection />
			<TestimonialsSection />
			<BlogSection />
			<AppDownloadSection />
			<Footer />
		</div>
	);
};
