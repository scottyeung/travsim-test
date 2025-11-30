
import { useTranslation } from "react-i18next";

const imgIcon3 = "https://www.figma.com/api/mcp/asset/da36a0a6-b8c6-4179-8694-0efb008d1dfd";

interface Plan {
  dataAmount: string;
  validity: string;
  price: string;
  isBestValue: boolean;
}

interface PackageSelectionProps {
  plans: Plan[];
  selectedPlan: number;
  setSelectedPlan: (index: number) => void;
}

function RadioButtonUnchecked({ className }: { className?: string }) {
  return (
    <div className={className} data-name="radio_button_unchecked" data-node-id="1:133">
      <div className="absolute inset-[8.33%]" data-name="icon" data-node-id="1:134">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(29, 27, 32, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon3} />
        </div>
      </div>
    </div>
  );
}

const PlanCard = ({ plan, isSelected, onClick }: { plan: Plan; isSelected: boolean; onClick: () => void }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`relative bg-white border ${isSelected ? "border-2 border-[#02d6cc]" : "border-[#d9d9d9]"} border-solid box-border content-stretch flex flex-[1_0_0] gap-[27px] items-center min-h-px min-w-px p-[16px] rounded-[8px] shrink-0 cursor-pointer`}
      onClick={onClick}
    >
      <div className="content-stretch flex flex-[1_0_0] gap-[9px] items-center min-h-px min-w-px relative shrink-0">
        <RadioButtonUnchecked className="overflow-clip relative shrink-0 size-[24px]" />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold h-[20px] leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {plan.dataAmount}
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal h-[16.625px] leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {plan.validity}
            </p>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        {plan.price}
      </p>
      {plan.isBestValue && (
        <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[145.33px] px-[5px] py-[2px] rounded-[5px] top-[-10.03px]">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[15px] rounded-sm text-right text-white p-0.5 bg-gradient-to-tr from-[#02D6CC] to-[#0042C4]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t("heroSection.bestValue")}
          </p>
        </div>
      )}
    </div>
  );
};

export const PackageSelection = ({ plans, selectedPlan, setSelectedPlan }: PackageSelectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:1333">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[20px] text-black w-[min-content] whitespace-pre-wrap" data-node-id="1:1334" style={{ fontVariationSettings: "'wdth' 100" }}>
        {t("heroSection.choosePackage")}
      </p>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          {plans.slice(0, 3).map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan}
              isSelected={selectedPlan === index}
              onClick={() => setSelectedPlan(index)}
            />
          ))}
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          {plans.slice(3, 6).map((plan, index) => (
            <PlanCard
              key={index + 3}
              plan={plan}
              isSelected={selectedPlan === index + 3}
              onClick={() => setSelectedPlan(index + 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
