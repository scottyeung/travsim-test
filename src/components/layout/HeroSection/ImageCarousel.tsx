import { useState } from "react";
import type { FunctionComponent } from "../../../common/types";

const imgFrame921 = "https://www.figma.com/api/mcp/asset/0ea4092a-a0bb-43dc-af96-3dbf70da3dc9";
const imgUs = "https://www.figma.com/api/mcp/asset/6a30ed3f-78f2-4ac8-a668-2abbc7c37b7c";
const img2 = "https://www.figma.com/api/mcp/asset/f1a707b9-4530-4391-8aed-73e4e3659d03";
const img3 = "https://www.figma.com/api/mcp/asset/16833e8b-32f1-4748-b488-e1af1395bb18";

export const ImageCarousel = (): FunctionComponent => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    imgFrame921,
    // Add more images as needed for the carousel
  ];

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="image carousel" data-node-id="1:1309">
      <div className="aspect-[464/465] box-border content-stretch flex flex-col gap-[50px] items-center justify-center p-[48px] relative rounded-[30px] shrink-0 w-full" data-node-id="1:1310">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
          <img alt="" className="absolute h-full left-[-2.63%] max-w-none top-0 w-[150.14%]" src={images[currentImage]} />
        </div>
        <div className="absolute bg-white left-[24px] overflow-clip rounded-[1000px] size-[64px] top-[23.47px]" data-name="flag container" data-node-id="1:1311">
          <div className="absolute left-1/2 overflow-clip size-[56px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="US" data-node-id="1:1312">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(240, 240, 240, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={imgUs} />
            </div>
            <div className="absolute bottom-0 left-[1.72%] right-0 top-[10.87%]" data-name="Group" data-node-id="I1:1312;1046:2270">
              <img alt="" className="block max-w-none size-full" src={img2} />
            </div>
            <div className="absolute bottom-1/2 left-0 right-1/2 top-0" data-name="Vector" data-node-id="I1:1312;1046:2275">
              <img alt="" className="block max-w-none size-full" src={img3} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:1313">
        {images.map((imgSource, index) => (
          <div
            key={index}
            className={`relative rounded-[12px] shrink-0 size-[80px] cursor-pointer ${index === currentImage ? "border-2 border-black border-solid" : "bg-[#00b1ff]"}
              `}
            onClick={(): void => { setCurrentImage(index); }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-full left-[-2.38%] max-w-none top-0 w-[149.82%]" src={imgSource} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};