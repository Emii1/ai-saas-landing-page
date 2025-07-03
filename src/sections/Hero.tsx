import ArrowIcon from "@/assets/arrow-right.svg";
import heroImg from "@/assets/VR.jpeg";
import Image from "next/image";
import cylinderImg from "@/assets/cylinder.png";
import noodleImg from "@/assets/noodle.png";

export const Hero = () => {
  return (
    //TODO: remove the gradient?
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Empower Your Business And Strengthen Productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Our AI SaaS platform seamlessly integrates with your existing
              workflows to deliver real-time insights, intelligent automation,
              and data-driven decision-making.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[550px] md:flex-1 relative">
            <Image
              src={heroImg}
              alt="Cog image"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover md:w-full md:h-full md:max-w-non lg:max-h-non max-h-96"
            />
            <Image
              src={cylinderImg}
              width={180}
              height={180}
              alt="cylinder Image"
              className="hidden md:block  -top-20 -left-32 md:absolute"
            />
            <Image
              src={noodleImg}
              alt="Noodle Image"
              width={180}
              className=" hidden lg:block absolute top-[320px] left-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
