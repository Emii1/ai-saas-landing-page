import ArrowRight from "@/assets/arrow-right.svg";
import starImg from "@/assets/star.png";
import springImg from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={starImg}
            alt="Star Image"
            width={330}
            className="absolute -left-[350px] -top-[130px] "
          />
          <Image
            src={springImg}
            alt="Spring Image"
            width={300}
            className="absolute -right-[330px] -top-[19px] "
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
          </button>
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};
