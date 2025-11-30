import type { FunctionComponent } from "../../common/types";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: FeatureCardProps): FunctionComponent => {
  return (
    <div
      className={`p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl hover:shadow-lg transition-shadow w-full ${className}`}
    >
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <img src={icon} alt="" className="w-full h-full" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
