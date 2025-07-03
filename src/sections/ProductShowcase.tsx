import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Streamline processes and reduce manual tasks.Gain actionable
            insights as events unfold.Anticipate trends and mitigate risks
            before they occur.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32 "
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            height={248}
            className=" hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
