import Link from "next/link";
import Image from "next/image";
import Products from "../../products/page";

export default function HomePage1() {
  return (
    <>
      {/* Full-Screen Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Responsive Background Image */}
        <Image
          src="/bg-home.png"
          alt="Background Image"
          fill
          priority
          className="absolute top-0 left-0 z-0 object-cover object-center"
        />

        {/* Black Overlay to Darken the Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>

        {/* Content Container */}
        <div className="absolute top-1/4 left-4 right-4 z-10 mx-4 sm:mx-8 lg:mx-28 w-full">
          {/* Flex Container for Text and Parallelograms */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Left Div (Text Section) */}
            <div className="text-white mb-8 lg:w-1/2">
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight mr-8">
                YOUR ONE-STOP SHOP FOR ALL CONSTRUCTION MATERIALS
              </h2>
              <p className="mt-4 mb-2 mr-8 text-sm sm:text-base lg:text-xl font-light leading-relaxed">
                OneMart is your trusted partner in sourcing building and
                construction materials.
              </p>

              {/* Contact Button */}
              <div className="mt-5">
                <Link href="/contact">
                  <button className="btn bg-[#e0c080] text-sm sm:text-lg lg:text-xl text-black rounded-none hover:bg-black hover:text-[#e0c080]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Div (Parallelogram) - Visible on Large Screens */}
            <div className="hidden lg:block lg:w-1/3">
              <div className="relative w-52 h-64 z-10 rotate-2 animate-slide-in-out">
                <div
                  className="absolute w-full h-full bg-[#e0c080]"
                  style={{
                    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <Products />
    </>
  );
}
