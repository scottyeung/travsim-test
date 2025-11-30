import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../../../common/types";

interface TabsSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabsSection = ({ activeTab, setActiveTab }: TabsSectionProps): FunctionComponent => {
  const { t } = useTranslation();

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="1:1337">
      <div className="content-stretch flex flex-col gap-[16px] h-[189px] items-start relative shrink-0 w-full" data-node-id="1:1338">
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="1:1339">
          <button
            className={`bg-[#f3f3f3] border ${activeTab === "description" ? "border-[#101828]" : "border-[#d9d9d9]"} border-solid box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0`}
            onClick={(): void => { setActiveTab("description"); }}
          >
            <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#101828] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("heroSection.description")}
            </p>
          </button>
          <button
            className={`bg-white border ${activeTab === "networks" ? "border-[#101828]" : "border-[#d9d9d9]"} border-solid box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0`}
            onClick={(): void => { setActiveTab("networks"); }}
          >
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("heroSection.networks")}
            </p>
          </button>
          <button
            className={`bg-white border ${activeTab === "returns" ? "border-[#101828]" : "border-[#d9d9d9]"} border-solid box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0`}
            onClick={(): void => { setActiveTab("returns"); }}
          >
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("heroSection.returnsMoneyBack")}
            </p>
          </button>
        </div>
        {activeTab === "description" && (
          <div className="content-stretch flex flex-col gap-[8px] h-[130px] items-start relative shrink-0 text-[16px] w-full whitespace-pre-wrap" data-node-id="1:1346">
            <ul className="block font-['Roboto:Regular',sans-serif] font-normal list-disc leading-[0] relative shrink-0 text-black w-full" data-node-id="1:1347" style={{ fontVariationSettings: "'wdth' 100" }}>
              <li className="mb-0 ms-[24px]">
                <span className="leading-[normal]">{t("heroSection.usesNetworks")}{` `}</span>
              </li>
              <li className="mb-0 ms-[24px]">
                <span className="leading-[normal]">{t("heroSection.reliableCoverage")}{` `}</span>
              </li>
              <li className="mb-0 ms-[24px]">
                <span className="leading-[normal]">{t("heroSection.dataSpeeds")}{` `}</span>
              </li>
              <li className="ms-[24px]">
                <span className="leading-[normal]">{t("heroSection.hotspotAllowed")}{` `}</span>
              </li>
            </ul>
            <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative shrink-0 text-[#b20610] w-full" data-node-id="1:1348" style={{ fontVariationSettings: "'wdth' 100" }}>
              {t("heroSection.readMore")}
            </p>
          </div>
        )}
        {/* Add content for other tabs if needed */}
      </div>
    </div>
  );
};