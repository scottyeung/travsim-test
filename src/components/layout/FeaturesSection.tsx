import { useState, useEffect } from "react";
import type { FunctionComponent } from "../../common/types";
import { FeatureCard } from "../ui/FeatureCard";
import { fetchContent } from "../../services/api";
import { useTranslation } from "react-i18next";
import { useLocale } from "../../common/LocaleContext";

interface Feature {
  icon: string;
  title: string;
  paragraph: string;
}

interface FeaturesData {
  title: string;
  image: string;
  features: Feature[];
}

export const FeaturesSection = (): FunctionComponent => {
  const [featuresData, setFeaturesData] = useState<FeaturesData | null>(null);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const { countryOrRegionCode } = useLocale();

  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const data = await fetchContent<FeaturesData>(
          "FeaturesSection",
          countryOrRegionCode,
          i18n.language
        );
        setFeaturesData(data);
      } catch (error) {
        console.error("Failed to load features", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeatures();
  }, [countryOrRegionCode, i18n.language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!featuresData) {
    return <div>Error loading features.</div>;
  }

  return (
    <div className="w-full bg-white pt-[70px] pb-35 px-20">
      <div className="max-w-container mx-auto flex flex-col items-center gap-6">
        <h2 className="text-heading-lg text-black self-start">
          {featuresData.title}
        </h2>

        <div className="w-full flex flex-col gap-8">
          <div className="flex items-center gap-8">
            {featuresData.features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={index}
                description={feature.paragraph}
                icon={feature.icon}
                title={feature.title}
              />
            ))}
          </div>
          <div className="flex items-center gap-8">
            {featuresData.features.slice(3, 6).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                description={feature.paragraph}
                icon={feature.icon}
                title={feature.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
