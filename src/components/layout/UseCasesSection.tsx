import HorizontalAccordion from "../ui/HorizontalAccordion";
import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../../common/types";

export const UseCasesSection = (): FunctionComponent => {
  const { t } = useTranslation();

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-center px-[104px] py-[70px] relative size-full" data-node-id="1:1349">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1350">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1351">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] text-black w-full whitespace-pre-wrap" data-node-id="1:1352" style={{ fontVariationSettings: "'wdth' 100" }}>
            {t("useCases.title")}
          </p>
        </div>
      </div>
      <HorizontalAccordion />
    </div>
  );
};
