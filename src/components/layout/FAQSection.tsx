import { useState } from "react";
import type { FunctionComponent } from "../../common/types";

const faqs = [
  {
    question: "How do I install or activate my eSIM?",
    answer:
      "Installation is simple. After purchase, we'll email you a QR code. Just scan it with your phone's camera, and you're all set. No technical skills required!",
  },
  {
    question: "What devices support eSIMs?",
    answer:
      "Most modern smartphones are eSIM-compatible. This includes iPhones (XR and newer), Google Pixel (3 and newer), and Samsung Galaxy (S20 and newer). If you're unsure, a quick web search for '[your phone model] + eSIM' will tell you.",
  },
  {
    question: "How long does it take to activate an eSIM?",
    answer:
      "Activation is instant. As soon as you scan the QR code and follow a few simple prompts, your eSIM will be active and ready to use.",
  },
  {
    question: "Can I schedule my eSIM activation for later?",
    answer:
      "Absolutely. You can purchase your eSIM today and activate it whenever you're ready to travel. The validity period only begins upon activation.",
  },
  {
    question: "Do I need to delete the eSIM after using my data?",
    answer:
      "You can if you want to, but it's not necessary. You can keep it on your device and top it up for future trips to the same destination.",
  },
  {
    question: "Can I reuse my eSIM after deleting it?",
    answer:
      "No, once an eSIM profile is deleted, it cannot be recovered. However, you can always purchase a new plan and install a new eSIM.",
  },
  {
    question: "Can I reuse the same eSIM for another trip?",
    answer:
      "Yes, if you're returning to the same destination. You can simply top up your existing eSIM with a new data plan through our app or website.",
  },
  {
    question: "Do I need Wi-Fi to activate the eSIM?",
    answer:
      "Yes, a stable internet connection (Wi-Fi or cellular data) is required to download the eSIM profile to your device.",
  },
];

export const FAQSection = (): FunctionComponent => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 bg-[#FFF9F0] p-8 rounded-2xl">
            <dl className="space-y-6 divide-y divide-[#E0D5C4]">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="pt-6 pb-6">
                  <dt>
                    <button
                      className="flex w-full items-start justify-between text-left text-gray-900"
                      onClick={(): void => {
                        handleToggle(index);
                      }}
                    >
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <svg
                          aria-hidden="true"
                          className={`h-6 w-6 transform transition-transform ${openIndex === index ? "rotate-45" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 4.5v15m7.5-7.5h-15"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  {openIndex === index && (
                    <dd className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};