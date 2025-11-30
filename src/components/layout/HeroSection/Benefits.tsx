import { useTranslation } from "react-i18next";
import type { FunctionComponent, SVGProps } from "../../../common/types";
import type React from "react";

const imgIcon = "https://www.figma.com/api/mcp/asset/5051ed1c-abaa-45af-957b-b1a1a743d542";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/c400e4a2-960c-4b42-9369-ccc52342de21";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/da3fbfc0-7301-4c3f-ba0f-3802989be059";

function Headphones({ className }: SVGProps): React.ReactElement {
  return (
    <div className={className} data-name="headphones-02" data-node-id="1:270">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Icon" data-node-id="1:271">
        <div className="absolute inset-[-5.56%_-5%]">
          <img alt="" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

function CreditCard({ className }: SVGProps): React.ReactElement {
  return (
    <div className={className} data-name="credit-card-02" data-node-id="1:268">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Icon" data-node-id="1:269">
        <div className="absolute inset-[-7.14%_-5%]">
          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
}

function ShieldTick({ className }: SVGProps): React.ReactElement {
  return (
    <div className={className} data-name="shield-tick" data-node-id="1:266">
      <div className="absolute inset-[8.62%_16.67%_8.91%_16.67%]" data-name="Icon" data-node-id="1:267">
        <div className="absolute inset-[-5.05%_-6.25%]">
          <img alt="" className="block max-w-none size-full" src={imgIcon2} />
        </div>
      </div>
    </div>
  );
}

export const Benefits = (): FunctionComponent => {
  const { t } = useTranslation();

  return (
    <div className="box-border content-stretch flex gap-[40px] items-center p-0 relative shrink-0" data-node-id="1:1335">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="fast internet" data-node-id="1:274">
        <div className="bg-white border border-[#d9d9d9] border-solid relative rounded-[8px] shrink-0 size-[48px]" data-node-id="1:275">
          <div className="overflow-clip relative rounded-[inherit] size-[48px]">
            <ShieldTick className="absolute left-[calc(50%+-0.05px)] overflow-clip size-[24px] top-[calc(50%+0.32px)] translate-x-[-50%] translate-y-[-50%]" />
          </div>
        </div>
        <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="1:277" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">{t("heroSection.safeSecure")}</p>
          <p>{t("heroSection.checkout")}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="great coverage" data-node-id="1:278">
        <div className="bg-white border border-[#d9d9d9] border-solid relative rounded-[8px] shrink-0 size-[48px]" data-node-id="1:279">
          <div className="overflow-clip relative rounded-[inherit] size-[48px]">
            <CreditCard className="absolute left-[calc(50%+-0.05px)] overflow-clip size-[24px] top-[calc(50%+0.32px)] translate-x-[-50%] translate-y-[-50%]" />
          </div>
        </div>
        <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="1:281" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">{t("heroSection.quickEasy")}</p>
          <p>{t("heroSection.recharge")}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Easy recharge" data-node-id="1:282">
        <div className="bg-white border border-[#d9d9d9] border-solid relative rounded-[8px] shrink-0 size-[48px]" data-node-id="1:283">
          <div className="overflow-clip relative rounded-[inherit] size-[48px]">
            <Headphones className="absolute left-1/2 overflow-clip size-[24px] top-[calc(50%+0.47px)] translate-x-[-50%] translate-y-[-50%]" />
          </div>
        </div>
        <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="1:285" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">{t("heroSection.customerSupport")}</p>
          <p>{t("heroSection.hours")}</p>
        </div>
      </div>
      <div className="border border-black border-solid box-border content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px min-w-px px-[17px] py-[17.5px] relative w-[145px] rounded-[8px] shrink-0" data-name="Sign in/ Sign up" data-node-id="1:286">
        <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-black text-center" data-node-id="1:287" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">{t("heroSection.checkCompatibility")}</p>
        </div>
      </div>
    </div>
  );
};
