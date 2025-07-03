import { pricingTiers } from "../../utils/pricing.plan";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title ">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 md:flex-row md:items-end md:justify-center lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={title || index}
                className={twMerge(
                  "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                  inverse && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50 ",
                      inverse && "text-ehite/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border  border-white/20 ">
                      <span>Popular </span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    €{monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8 ">
                  {features.map((feature, idx) => (
                    <li
                      key={feature || idx}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
